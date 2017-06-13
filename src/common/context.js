/*global process*/
var context = {};
var program = require('commander');
program.version('0.0.1').option('-d, --dburl', '').parse(process.argv);
context.dburl ='mongodb://bowen:123456AcCeEEEX@crm.liangcanl.cn/bowencrm' /*program.args[0]*/;
console.log(program.args[0])
export default context;