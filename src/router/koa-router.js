var koaRouter = new require('koa-router')();

koaRouter.add = function(Controller) {
	if (typeof Controller === 'function') {
		new Controller();
	}
};

export {
	koaRouter
};