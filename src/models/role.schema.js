var {Schema} = require('mongoose');

export default new Schema({  
  name:{type:Schema.Types.String,unique:true,required:true},
  authrity:[Schema.Types.String],
  desc:Schema.Types.String,
  created:Schema.Types.Date,
  updated:Schema.Types.Date,
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
});