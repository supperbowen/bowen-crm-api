var {Schema} = require('mongoose');

export default {  
  name:Schema.Types.String,
  type:Schema.Types.String,
  desc:Schema.Types.String,
  alternates:[Schema.Types.String],
  created:{type:Schema.Types.Date,default:Date.now},
  updated:{type:Schema.Types.Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};