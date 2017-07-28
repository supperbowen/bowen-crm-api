import {
	routePrefix,
	route,
	koaRouter
} from '../router';
import Service from '../common/service.decorator';
import RssService from '../services/rss.service';
import _ from 'lodash'


@routePrefix('rss')
@Service(RssService, 'rss')
export default class RssConteroller {
	@route('rss/:id') //http://localhost:3000/user/(id)
	async getArticle({
		id
	}) {

	}

	@route('list','post') //http://localhost:3000/user/list/?filter={filter}
	async getUsers({
		pageSize,pageNum
	}) {
		let list = await this.service.getList({},pageSize, pageNum);
		list = _.map(list, (item)=>{
			_id:item._id,
			author:item.author,
			created:item.created,
			link:item.link,
			title:item.title
		});
		return {list,pageNum,pageSize};
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
	async saveUser(user) {

	}

	@route(':id', 'delete')
	async deleteUser({
		id
	}) {

	}
}

koaRouter.add(RssConteroller);
