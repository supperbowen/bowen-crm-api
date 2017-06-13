var {Schema} = require('mongoose');

export default {  
  name:Schema.Types.String,
  authrity:[Schema.Types.String],
  desc:Schema.Types.String,
  created:Schema.Types.Date,
  updated:Schema.Types.Date,
  createBy:Schema.Types.ObjectId,
  updateBy:Schema.Types.ObjectId
};