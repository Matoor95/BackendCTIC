(function() {
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;
    mongoose.set("useCreateIndex", true);
    var abonneSchema = new Schema({
      email: { type: String, required: true }
    });
  
    module.exports = {
      abonneModel: mongoose.model("Abonnes", abonneSchema)
    };
  })();
  