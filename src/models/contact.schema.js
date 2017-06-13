var {Schema} = require('mongoose');

export default {	
  name:String,
  phone:String,
  nickName:String,
  gender:Boolean,
  position:String,
  email:String,
  wechat:String,
  qq:String,
  isMain:Boolean,
  desc:String,
  created:{type:Date,default:Date.now},
  updated:{type:Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};