import {
	routePrefix,
	route,
	koaRouter
} from '../router';
import Service from '../common/service.decorator';
import RssOptionsService from '../services/rssoption.service';
import _ from 'lodash'
const http = require('http');


@routePrefix('rssoption')
@Service(RssOptionsService, 'rssoption')
export default class RssConteroller {
	@route('', 'get') //http://localhost:3000/user/(id)
	async getItem({
		id
	}) {
		let item = await this.service.getItemById(id);
		return item;
	}

	@route('list', 'post') //http://localhost:3000/user/list/?filter={filter}
	async getList({
		pageSize,
		pageNum
	}) {
		let list = await this.service.getList({}, pageSize, pageNum);
		list = _.map(list, (item) => {
			return {
				_id: item._id,
				author: item.author,
				created: item.created,
				link: item.link,
				title: item.title,
				icon:item.icon,
				name:item.name
			};
		});
		return {
			list,
			pageNum,
			pageSize
		};
	}

	@route('sync', 'get')
	async createUser({
		link
	}) {
		return await this.service.getRssList(link);
	}


	@route('save', 'post')
	async saveRssOption(item) {
		return await this.service.saveItem(item);
	}

	@route(':id', 'delete')
	async deleteUser({
		id
	}) {
		return await this.service.deleteItem(id);
	}
}

koaRouter.add(RssConteroller);
