import { routePrefix, route } from '../router';
import Service from '../services/role.service';
import BasController from '../common/bas.controller';

var _ = require('lodash');

@routePrefix('role')
export class Conteroller extends BasController{
    constructor(){
        super(new Service());
        var roleService = new RoleService();
    }
    @route(':id') //http://localhost:3000/user/(id)
    async getUser({ id }) {
    }

    @route('list/:fitler')//http://localhost:3000/user/list/?filter={filter}
    async getUsers({ filter }) {
        var roles = await this.service.getLikeList(filter);        
        return this.toCollection(roles,{},roles.length);
    }

    @route('create', 'get')
    async createUser() {
        return this.service.create();
    }

    @route('save', 'post')
    async saveUser({item}) {
        return await this.service.saveItem(item);
    }

    @route(':id', 'delete')
    async deleteUser({ id }) {
        return await this.service.deleteItem(id);
    }
    }
}

