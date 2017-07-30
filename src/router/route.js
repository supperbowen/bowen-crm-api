var router = require('koa-router');
import {
	koaRouter
} from './koa-router';

/**
 * route 
 * 设置方法的路由，不要在route的前和后加/，只间带参数的方式与标准的设置方法一致
 * 
 * param: asnyc
 * 如果是使用异步数据读取，第三个参数 isAsync可以不写，这里后方法必需是一个async方法，否则会报错。
 * @route('load/:id','get')
 * async getTemplate({id}){
 *     id = await timeout(id);
 *     this.body = 'ttttttt' + id;
 * }
 *
 * 如果是使用同步的方式进行数据获取，请把第三个参数设置成false
 * @route('loadTpls','get', false) 
 * getTemplates(){
 *    this.body = 'abkjl;kjd;slfj';
 * }
 * 
 * param: method
 * 用户可以指定这个参数的值，如'post', 'get','put','delete','head'等，注意的是都要为小写
 * 如果用户不指定这个参数，程序将根据函数的名称或路由名称（优先参考函数名称）自行解释这个数据，规则如下
 * 方法名开头单词         method       demo    
 * get/load             get           getUser(){},loadUser(){}, getUserList(){},loadUserList(){}...
 * update               put           updateUser(){}
 * delete/remove        delete        deleteUser(){}, removeUser(){}
 * create               post          createUser(){}
 */
export function route(route, method, isAsync = true) {
	return function(target, key, descriptor) {
		setTimeout(function() { //TODO：默认类的实例化会在函数实例化之后，所有这里会加这个东东
			var prefix = target.router && target.router.prefix,
				fixed_route;

			if (route) {
				fixed_route = prefix ? `/${prefix}/${route}` : `/${route}`;
			} else {
				fixed_route = `/${prefix}`;
			}

			console.log(fixed_route); //打印当前的路由表

			method = method || getDefaultHttpMethod(key, route) || 'get';

			console.log(`route=>[${method}]${fixed_route}`);

			koaRouter[method](fixed_route, async function(ctx, next) {
				var result;
				try {
					if (method === 'get' || method === 'delete') {
						var params = Object.keys(ctx.params).length ? ctx.params : ctx.query;
						if (isAsync) {
							result = await descriptor.value.call(target, params, ctx);
						} else {
							result = descriptor.value.call(target, params, ctx);
						}
					} else {
						if (isAsync) {
							result = await descriptor.value.call(target, ctx.request.body || {}, ctx);
						} else {
							result = descriptor.value.call(target, ctx.request.body || {}, ctx);
						}
					}
				} catch (error) {
					//服务器错误自动打出来，这里没有向前端扔出错误，后面会添加当前的环境是debug还是production进一步进行优化。
					console.error(error);
					result = error;
					ctx.status = 201;
				}

				ctx.response.body = result;
				//ctx.render(result);
				await next;
			});
			return descriptor;
		})
	}
}


function getDefaultHttpMethod(name, route) {
	if (/^get/.test(name)) {
		return 'get';
	} else if (/^update/.test(name)) {
		return 'put';
	} else if (/^delete/.test(name) || /^remove/.test(name)) {
		return 'delete';
	} else if (/^create/.test(name)) {
		return 'post';
	} else if (route) {
		return getDefaultHttpMethod(route);
	}
}
