import basService from '../common/bas.service';
import schema from '../models/rss.schema';
var _ = require('lodash');


export default class Service extends basService {
	constructor() {
		super('rss', schema);
	}

	create() {
		return {

		};
	}

	async saveArticles(link, articles) {
		var saved = [];
		for (let article of articles) {
			article.name = link + article.guid;
			var item = this.getItem({
				name: article.name
			});
			if (!item) {
				let result = await this.saveItem(article);
				saved.push(result);
			}
		}

		return await saved;
	}

	getItemByGuid(guid) {
		return this.getItem({
			'articles[0].guid': guid
		});
	}

	createNew(options = {}) {
		var newItem = {
			ctg:'article',
			isPush: false,
			pushDate: new Date()
		};

		let result = _.extend({}, newItem, options);
		return this.toPromise(result);
	}

	getPageHtml(url) {
		var request = require('superagent');
		return new Promise((resolve, reject) => {
			if (!url) {
				reject('url 不能为空');
			}
			try {
				url = decodeURIComponent(url);
				request.get(url)
					// .set('Host', 'blog.csdn.net')
					.set('Accept', 'text/html')
					.end(function(err, res) {
						if (res.statusCode === 200) {
							resolve(res.text);
						} else {
							var message = '获取页面HTML失败' + res.statusMessage || '';
							reject(message);
							console.error(message);
						}
					});
			} catch (error) {
				reject(error);
				console.error(message);
			}

		})
	}
}
