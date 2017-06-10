import { routePrefix, route, koaRouter } from '../router';


// @routePrefix('user')
// export class TemplateConteroller {
//     @route(':id') //http://localhost:3000/user/(id)
//     async getUser({ id }) {

//     }

//     @route('list/:fitler')//http://localhost:3000/user/list/?filter={filter}
//     async getUsers({ filter }) {

//     }

//     @route('create', 'get')
//     async createUser() {

//     }

//     @route('save', 'post')
//     async saveUser(user) {

//     }

//     @route(':id', 'delete')
//     async deleteUser({ id }) {

//     }
// }

// koaRouter.add(TemplateConteroller);