var {
	Schema
} = require('mongoose');

var articleSchema = new Schema({
	author: Schema.Types.String,
	link: Schema.Types.String,
	description: Schema.Types.String,
	guid: Schema.Types.String,
	origlink: Schema.Types.String,
	pubDate: Schema.Types.String,
	title: Schema.Types.String,
	summary: Schema.Types.String
});

export default new Schema({
	name: Schema.Types.String,
	link: Schema.Types.String,
	date: Schema.Types.Date,
	articles: [articleSchema],
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
