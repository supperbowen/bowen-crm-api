import 'babel-polyfill';
import {
	koaRouter
} from './router';
//import context from './common/context';

const bodypraser = require('koa-bodyparser');
const mount = require('koa-mount');
const oauthserver = require('koa-oauth-server');
const model = require('../models/oauth.schema');

const Koa = require('koa');
//const mongoose = require('mongoose');
const app = new Koa();

app.oauth = oauthserver({
	model: model, // See https://github.com/thomseddon/node-oauth2-server for specification
	grants: ['password'],
	debug: true
});

app.use(bodypraser());

//import controllers to app, we should do this or our controller will not execute!
//把要使用到的controller引到当前app中，我们必须这样做，否则controller被不会被加载运行。
import controllers from './controllers';
controllers.bindRouters();


// Mount `oauth2` route prefix.
app.use(mount('/oauth2', koaRouter.middleware()));

// Register `/token` POST path on oauth router (i.e. `/oauth2/token`).
koaRouter.post('/token', app.oauth.grant());


app.use(koaRouter.routes())
	.use(koaRouter.allowedMethods());

app.listen(8088);
console.log('server started : http://localhost:8088/');