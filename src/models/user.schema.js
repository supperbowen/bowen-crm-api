var {
	Schema
} = require('mongoose');

export default new Schema({
	name: {
		type: Schema.Types.String,
		unique: true,
		required: true
	},
	nickName: Schema.Types.String,
	desc: Schema.Types.String,
	img: Schema.Types.Buffer,
	email: String,
	password: String,
	roles: [Schema.Types.ObjectId],
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