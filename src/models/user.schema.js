var {Schema} = require('mongoose');

export default {  
  name:String,
  nickName:String,
  desc:String,
  img: Schema.Types.Buffer,
  roles:[Schema.Types.ObjectId],
  created:{type:Date,default:Date.now},
  updated:{type:Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};