var {Schema} = require('mongoose');

export default {  
  name:String,
  area:String,/*服务区域*/
  phone:String,
  qq:String,
  email:String,  
  birthday:Date,
  hiredate:Date,
  desc:String,
  created:{type:Date,default:Date.now},
  updated:{type:Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};