var {Schema} = require('mongoose');

export default {  
  name:String,
  nickName:String,
  phone:String,
  address:String,    
  desc:String,
  contacts:[Schema.Types.ObjectId],
  created:{type:Date,default:Date.now},
  updated:{type:Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};