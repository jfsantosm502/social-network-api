var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = new Schema({
    _userId: { type: Schema.Types.ObjectId, ref: 'users' },
    userName: { type: String },
    title: { type: String, required: true },
    body: { type: String, required: true },
    tags: [{ type: String }],
    createDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('posts', schema);