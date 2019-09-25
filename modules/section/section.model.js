(function() {
    var mongoose = require("mongoose");
    var Schema = mongoose.Schema;

    var sectionSchema = new Schema({
      titre: { type: String, required: true },
      description: { type: String, required: true }
    });
    module.exports = {
      sectionModel: mongoose.model("Section", sectionSchema)
    };
  })();
  