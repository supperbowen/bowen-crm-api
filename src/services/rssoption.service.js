import basService from '../common/bas.service';
import schema from '../models/rssoption.schema';
import rssBooker from '../common/rss.booker';
import RssService from './rss.service';
var _ = require('lodash');


export default class Service extends basService {
	constructor() {
		super('rssoption', schema);
	}

	createNew(options={}) {
		var newItem = {

		};
		let result = r=>r(_.extend({},newItem, options));
		return this.toPromise(result);
	}

	async saveArticles(link, articles) {
		var saved = [];
		var rssService = new RssService();

		var rssOption = this.getItem({
			link: url
		});

		for (let article of articles) {
			article.name = rssOption.name + article.name;
			article.optionId = rssOption._id;
			var item = await rssService.getItem({
				name: article.name
			});
			if (!item) {
				let result = await rssService.saveItem(article);
				saved.push(result);
			}
		}
		return await saved;
	}

	async getRssList(url) {
		url = decodeURIComponent(url);
		let articles = await rssBooker(url);
		let results = await this.saveArticles(url, articles);
		return results;
	}
}
