var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const schema = new Schema({
    email: { type: String, unique: true, require: true },
    password: { type: String, require: true },
    createDate: { type: Date, default: Date.now }
});

schema.set('toJSON', { virtuals: true });
module.exports = mongoose.model('users', schema);