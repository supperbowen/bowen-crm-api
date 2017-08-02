import {
	routePrefix,
	route,
	koaRouter
} from '../router';
import Service from '../common/service.decorator';
import RssService from '../services/rss.service';
import RssOptionService from '../services/rssoption.service.js';
import _ from 'lodash'
const http = require('http');


@routePrefix('rss')
@Service(RssService, 'rss')
export default class RssConteroller {
	@route('', 'get')
	async getItem({
		id,
		isAbout
	}) {
		let item = {};
		if (isAbout) {
			item = await this.service.getItem({
				ctg: 'about'
			});
		} else if (id) {
			item = await this.service.getItemById(id);
		}
		if (!item.content) {
			item.content = await this.service.getPageHtml(item.link);
		}
		if (!item.remark) {
			item.remark = item.content.replace(/<[^>]+>/g, "").replace(/\s+/, ' ').slice(0, 50);
		}
		return item;
	}

	@route('list', 'post')
	async getList({
		pageSize,
		pageNum
	}) {
		let list = await this.service.getList({}, pageSize, pageNum);
		let totalItems = await this.service.getListCount({});
		// let rssOptionService = new RssOptionService();
		list = _.map(list, (item) => {
			// var rssOption = (await rssOptionService.getItemById(item.optionId)) || {};
			return {
				_id: item._id,
				author: item.author,
				icon: item.icon,
				created: item.created,
				link: item.link,
				title: item.title,
				isPush: item.isPush,
				ctg: item.ctg,
				pushDate: item.isPush && item.pushDate
			};
		});
		return {
			list,
			pageNum,
			pageSize,
			totalItems
		};
	}

	@route('pushlist', 'post') //http://localhost:3000/user/list/?filter={filter}
	async getPushList({
		pageSize,
		pageNum
	}) {
		let list = await this.service.getList({
			isPush: true,
			isAbout:false
		}, pageSize, pageNum, {
			pushDate: -1,
			updated: -1
		});
		let totalItems = await this.service.getListCount({});
		// let rssOptionService = new RssOptionService();
		list = _.map(list, (item) => {
			// var rssOption = (await rssOptionService.getItemById(item.optionId)) || {};
			return {
				_id: item._id,
				author: item.author,
				icon: item.icon,
				created: item.created,
				link: item.link,
				title: item.title,
				isPush: item.isPush,
				ctg: item.ctg,
				pushDate: item.isPush && item.pushDate
			};
		});
		return {
			list,
			pageNum,
			pageSize,
			totalItems
		};
	}

	@route('sync/:url', 'get')
	async createUser({
		url
	}) {
		let data = await this.service.getRssList(url);
		let result = await this.service.saveArticles(url, data);
		return result;
	}


	@route('save', 'post')
	async saveItem(item) {

		if (item.ctg === 'about' && item.isPush) {
			//由于只会有一个相关的，把其它的相关文章去掉。
			let aboutArticles = await this.service.getList({
				ctg: 'about'
			});
			for (let article of aboutArticles) {
				article.ctg = 'article';
				await this.service.saveItem(article);
			}
		}
		return await this.service.saveItem(item);
	}

	@route('create', 'post')
	async createNew(options) {
		return await this.service.createNew(options);
	}

	@route('delete', 'delete')
	async deleteItem({
		id
	}) {
		await this.service.deleteItem(id);
		return id;
	}

	@route('page', 'get')
	async getPageHtml({
		link
	}) {
		return await this.service.getPageHtml(link);
	}
}

koaRouter.add(RssConteroller);
