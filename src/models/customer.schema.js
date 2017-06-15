var {
	Schema
} = require('mongoose');


export default new Schema({
	name: Schema.Types.String,
	nickName: Schema.Types.String,
	phone: Schema.Types.String,
	address: Schema.Types.String,
	desc: Schema.Types.String,
	contacts: [Schema.Types.ObjectId],
	created: {
		type: Schema.Types.Date,
		default: Date.now
	},
	updated: {
		type: Schema.Types.Date,
		default: Date.now
	},
	createBy: Schema.Types.ObjectId,
	updateBy: Schema.Types.ObjectId
});