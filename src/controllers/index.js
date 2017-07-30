import {
	koaRouter
} from '../router';
import UserController from './user.controller';
import RoleController from './role.controller';
import ActivityController from './activity.controller';
import RssController from './rss.controller';
import RssOptionController from './rssoption.controller';
import context from '../common/context';

export default {
	bindRouters: function bindRouters() {
		koaRouter.add(UserController);
		koaRouter.add(RoleController);
		koaRouter.add(ActivityController);
		koaRouter.add(RssController);
		koaRouter.add(RssOptionController);
	}
};
