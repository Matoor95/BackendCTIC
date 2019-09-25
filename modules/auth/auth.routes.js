(function() {
    module.exports = function(app) {
      const Ctrl = require("./auth.controller")();
      app.route("/login2").post(Ctrl.login2);
      app.route("/addEdition").post(Ctrl.addEdition); 
    };
  })();
