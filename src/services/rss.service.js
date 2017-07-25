import basService from '../common/bas.service';
import schema from '../models/rss.schema';


export default class Service extends basService {
	constructor() {
		super('rss', schema);
	}

	create() {
		return {

		};
	}

	async saveArticles(link, articles) {
		var name = link + new Date().toLocaleDateString();
		var rssObj = {
			name,
			link,
			articles,
			date: new Date()
		}

		var rssObj = (await this.getItem({
			'name': name
		})) || rssObj;

		return await this.saveItem(rssObj);
	}

	getItemByGuid(guid) {
		return this.getItem({
			'articles[0].guid': guid
		});
	}

	getRssList(url) {
		return getRssList(url);
	}
}



var request = require('request'),
	FeedParser = require('feedparser')
/*,
	Iconv = require('iconv').Iconv,
    zlib = require('zlib')*/
;

// Don't worry about this. It's just a localhost file server so you can be
// certain the "remote" feed is available when you run this example.
var server = require('http').createServer(function(req, res) {
	var stream = require('fs').createReadStream(require('path').resolve(__dirname, '../test/feeds' + req.url));
	res.setHeader('Content-Type', 'text/xml; charset=Windows-1251');
	res.setHeader('Content-Encoding', 'gzip');
	stream.pipe(res);
});

function fetch(feed, resolve, reject) {

	// Define our streams
	var req = request(feed, {
		timeout: 50000,
		pool: false
	});
	req.setMaxListeners(50);
	// Some feeds do not respond without user-agent and accept headers.
	req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
	req.setHeader('accept', 'text/html,application/xhtml+xml');

	var feedparser = new FeedParser();
	var articles = [];

	// Define our handlers
	req.on('error', (err) => {
		reject(err);
		done(err);
	});

	req.on('response', function(res) {
		if (res.statusCode != 200) return this.emit('error', new Error('Bad status code'));
		var encoding = res.headers['content-encoding'] || 'identity',
			charset = getParams(res.headers['content-type'] || '').charset;
		//res = maybeDecompress(res, encoding);
		//res = maybeTranslate(res, charset);
		res.pipe(feedparser);
	});

	feedparser.on('error', (err) => {
		reject(err);
		done(err);
	});
	feedparser.on('end', () => {
		resolve(articles);
	});

	feedparser.on('meta', function(meta) {
		console.log(meta);
	});

	feedparser.on('readable', function() {
		var post;
		while (post = this.read()) {
			//console.log(post);
			articles.push(post);
		}
	});
}

function maybeDecompress(res, encoding) {
	var decompress;
	if (encoding.match(/\bdeflate\b/)) {
		decompress = zlib.createInflate();
	} else if (encoding.match(/\bgzip\b/)) {
		decompress = zlib.createGunzip();
	}
	return decompress ? res.pipe(decompress) : res;
}

function maybeTranslate(res, charset) {
	var iconv;
	// Use iconv if its not utf8 already.
	if (!iconv && charset && !/utf-*8/i.test(charset)) {
		try {
			iconv = new Iconv(charset, 'utf-8');
			console.log('Converting from charset %s to utf-8', charset);
			iconv.on('error', (err) => done(err, server));
			// If we're using iconv, stream will be the output of iconv
			// otherwise it will remain the output of request
			res = res.pipe(iconv);
		} catch (err) {
			res.emit('error', err);
		}
	}
	return res;
}

function getParams(str) {
	var params = str.split(';').reduce(function(params, param) {
		var parts = param.split('=').map(function(part) {
			return part.trim();
		});
		if (parts.length === 2) {
			params[parts[0]] = parts[1];
		}
		return params;
	}, {});
	return params;
}

function done(err) {
	if (err) {
		console.log(err, err.stack);
	}
	//server.close();
}



function getRssList(url) {
	return new Promise((resolve, reject) => {
		fetch(url, resolve, reject);
	});
};
