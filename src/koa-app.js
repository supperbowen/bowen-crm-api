import "babel-polyfill";
import {routePrefix,route, koaRouter} from './router';
const Koa = require('koa');
const app = new Koa();

//import controllers to app, we should do this or our controller will not execute!
//把要使用到的controller引到当前app中，我们必须这样做，否则controller被不会被加载运行。
import './demo/template.controller';
import './demo/user.controller';


app.use(koaRouter.routes())
   .use(koaRouter.allowedMethods());

app.listen(8088);
console.log('server started : http://localhost:8088/');
