import {
	routePrefix,
	route
} from '../router';
import RoleService from '../services/role.service';
import Service from '../common/service.decorator';
import BasController from '../common/bas.controller';

var _ = require('lodash');

@routePrefix('role')
@Service(RoleService, 'role')
export default class Conteroller extends BasController {
	constructor() {
		super();
	}
	@route('item/:id', false) //http://localhost:3000/user/(id)
	getItem({
		id
	}) {
		return this.service.create();
	}

	@route('init', 'get')
	async initRoles() {
		var role = this.service.create();
		role.name = 'admin';
		role.authrity = ['*'];
		role.desc = 'administrator';
		return await this.service.saveItem(role);
	}

	@route('list/:fitler') //http://localhost:3000/user/list/?filter={filter}
	async getItems({
		filter
	}) {
		var roles = await this.service.getLikeList(filter);
		return this.toCollection(roles, {}, roles.length);
	}

	@route('create', 'get', true)
	createItem() {
		return this.service.create();
	}

	@route('save', 'post')
	async saveItem({
		item
	}) {
		return await this.service.saveItem(item);
	}

	@route(':id', 'delete')
	async deleteItem({
		id
	}) {
		return await this.service.deleteItem(id);
	}
}