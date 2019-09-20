(function() {
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;
    mongoose.set("useCreateIndex", true);
    var userSchema = new Schema({
      username: { type: String, unique: true, required: true },
      password: { type: String, required: true }
    });
  
    module.exports = {
      userModel: mongoose.model("Users", userSchema)
    };
  })();
  