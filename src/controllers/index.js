import { koaRouter } from '../router';
import UserController from './user.controller';
import RoleController from './role.controller';
import ActivityController from './activity.controller';
import context from '../common/context';

var mongoose = require('mongoose');


export default {
  bindRouters:function bindRouters(){
    koaRouter.add(UserController);
    koaRouter.add(RoleController);
    koaRouter.add(ActivityController);
    mongoose.connect(context.dburl);   
  }
};