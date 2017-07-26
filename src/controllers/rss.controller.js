import {
	routePrefix,
	route,
	koaRouter
} from '../router';
import Service from '../common/service.decorator';
import RssService from '../services/rss.service';


@routePrefix('rss')
@Service(RssService, 'rss')
export default class RssConteroller {
	@route('rss/:id') //http://localhost:3000/user/(id)
	async getArticle({
		id
	}) {

	}

	@route('list/:id') //http://localhost:3000/user/list/?filter={filter}
	async getUsers({
		filter
	}) {

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
