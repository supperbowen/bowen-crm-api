var {Schema} = require('mongoose');

export default{
  customer_id:Schema.Types.ObjectId,
  employee_id:Schema.Types.ObjectId,
  type:Schema.Types.ObjectId,
  desc:String,
  content:String,
  created:{type:Date,default:Date.now},
  updated:{type:Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};