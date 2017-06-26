import 'babel-polyfill';
import {
	koaRouter
} from './router';
import context from './common/context';

const Koa = require('koa');
const app = new Koa();

//import controllers to app, we should do this or our controller will not execute!
//把要使用到的controller引到当前app中，我们必须这样做，否则controller被不会被加载运行。
import controllers from './controllers';
controllers.bindRouters();


app.use(koaRouter.routes())
	.use(koaRouter.allowedMethods());

var mongoose = require('mongoose');
mongoose.openUri(context.dburl);

app.listen(8088);
console.log('server started : http://localhost:8088/');