var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  name: String,
  user_id: String,
  provider: String,
  created_at: {type: Date, default: new Date()},
  last_login: { type: Date, default: Date.now },
});

UserSchema.statics.findOrCreate = require("find-or-create");

module.exports = mongoose.model('user', UserSchema);
