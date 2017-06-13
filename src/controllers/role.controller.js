import { routePrefix, route } from '../router';
import Service from '../services/role.service';
import BasController from '../common/bas.controller';


var _ = require('lodash');
var service = new Service();

@routePrefix('role')
export default class Conteroller extends BasController{
    constructor(){
        super(service);
        //this.service = new Service();
        // var roleService = new RoleService();
    }
    @route('item/:id') //http://localhost:3000/user/(id)
    async getItem({ id }) {
        return this.service.create();  
    }

    @route('list/:fitler')//http://localhost:3000/user/list/?filter={filter}
    async getItems({ filter }) {
        var roles = await service.getLikeList(filter);        
        return this.toCollection(roles,{},roles.length);
    }

    @route('create', 'get', true)
    createItem() {
        return service.create();        
    }

    @route('save', 'post')
    async saveItem({item}) {
        return await service.saveItem(item);
    }

    @route(':id', 'delete')
    async deleteItem({ id }) {
        return await service.deleteItem(id);
    }    
}

