var {Schema} = require('mongoose');

export default {	
  name:Schema.Types.String,
  phone:Schema.Types.String,
  nickName:Schema.Types.String,
  gender:Schema.Types.Boolean,
  position:Schema.Types.String,
  email:Schema.Types.String,
  wechat:Schema.Types.String,
  qq:Schema.Types.String,
  isMain:Schema.Types.Boolean,
  desc:Schema.Types.String,
  created:{type:Schema.Types.Date,default:Date.now},
  updated:{type:Schema.Types.Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};