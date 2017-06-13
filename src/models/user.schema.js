var {Schema} = require('mongoose');

export default {  
  name:Schema.Types.String,
  nickName:Schema.Types.String,
  desc:Schema.Types.String,
  img: Schema.Types.Buffer,
  roles:[Schema.Types.ObjectId],
  created:{type:Schema.Types.Date,default:Date.now},
  updated:{type:Schema.Types.Date,default:Date.now},
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};