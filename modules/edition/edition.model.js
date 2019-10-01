(function() {
  var mongoose = require("mongoose");
  var Schema = mongoose.Schema;

  var sectionSchema = new Schema({
    titre: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String}
  });

  var editionSchema = new Schema({
    date: { type: Date, required: true },
    numero: { type: String, required: true },
      sections: { type: String}
  });
  
  
  module.exports = {
    editionModel: mongoose.model("Edition", editionSchema)
  };
})();