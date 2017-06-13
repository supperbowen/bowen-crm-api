var {Schema} = require('mongoose');

export default {  
  name:String,
  authrity:[String],
  desc:String,
  created:{type:Date,default:Date.now},
  updated:{type:Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};