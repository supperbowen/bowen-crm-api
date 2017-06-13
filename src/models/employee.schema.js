var {Schema} = require('mongoose');

export default {  
  name:Schema.Types.String,
  area:Schema.Types.String,/*服务区域*/
  phone:Schema.Types.String,
  qq:Schema.Types.String,
  email:Schema.Types.String,  
  birthday:Schema.Types.Date,
  hiredate:Schema.Types.Date,
  desc:Schema.Types.String,
  created:{type:Schema.Types.Date,default:Date.now},
  updated:{type:Schema.Types.Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};