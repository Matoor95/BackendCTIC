(function() {
    module.exports = function(app) {
      const Ctrl = require("./edition.controller")();
      app.route("/addEdition").post(Ctrl.addEdition); 
      app.route("/create").post(Ctrl.create); 
      app.route("/:editionId/attacheFile").post(Ctrl.attacheFile);

    };
  })();
