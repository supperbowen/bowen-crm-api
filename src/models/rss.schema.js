var {
	Schema
} = require('mongoose');

export default new Schema({
	name: Schema.Types.String,
	author: Schema.Types.String,
	link: Schema.Types.String,
	description: Schema.Types.String,
	guid: Schema.Types.String,
	origlink: Schema.Types.String,
	pubDate: Schema.Types.String,
	title: Schema.Types.String,
	summary: Schema.Types.String,
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
