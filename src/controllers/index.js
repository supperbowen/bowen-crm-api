import { koaRouter } from '../router';
import userController from './user.controller';


export default function bindRouters(){
  koaRouter.add(userController);
}