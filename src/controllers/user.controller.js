import { routePrefix, route, koaRouter } from '../router';
import Service from '../common/service.decorator';
import UserService from '../services/user.service';
import RoleService from '../services/role.service';

var roleService= new RoleService();

@routePrefix('user')
@Service(UserService,'user')
export default class TemplateConteroller {
    @route('item/:id') //http://localhost:3000/user/(id)
    async getUser({ id }) {

    }

    @route('list/:fitler')//http://localhost:3000/user/list/?filter={filter}
    async getUsers({ filter }) {

    }

    @route('create', 'get')
    async createUser() {

    }

    @route('init','get')
    async initUsers(){
        var user = this.service.create();
        var role = (await roleService.getItem({name:'admin'})).toObject();
        user.roles =[role._id];
        user.name = 'sysadmin';
        user.desc = '管理员';
        user.nickName = 'admin';
        return await this.service.saveItem(user);
    }

    @route('save', 'post')
    async saveUser(user) {

    }

    @route(':id', 'delete')
    async deleteUser({ id }) {

    }
}

koaRouter.add(TemplateConteroller);