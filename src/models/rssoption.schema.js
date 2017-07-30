var {
	Schema
} = require('mongoose');

export default new Schema({
	name: Schema.Types.String,
	icon: Schema.Types.String,
	link: Schema.Types.String,
	title: Schema.Types.String,
	remark: Schema.Types.String,
	filters: [
		{regexp: Schema.Types.String},
		{content: Schema.Types.String}
	],
	appendText: Schema.Types.String,
	prependText: Schema.Types.String,
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
