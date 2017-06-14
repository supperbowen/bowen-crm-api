var {Schema} = require('mongoose');

export default new Schema({
  customer_id:Schema.Types.ObjectId,
  employee_id:Schema.Types.ObjectId,
  type:Schema.Types.ObjectId,
  desc:Schema.Types.String,
  content:Schema.Types.String,
  created:{type:Schema.Types.Date,default:Date.now},
  updated:{type:Schema.Types.Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
});