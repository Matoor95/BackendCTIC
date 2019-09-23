(function() {
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;

    var sectionSchema = new Schema({
      titre: { type: date, required: true },
      numero: { type: String, required: true },
      tab: { type: Array, required: true },
    });

    
    
    module.exports = {
      userModel: mongoose.model("Section", sectionSchema)
    };
  })();
  