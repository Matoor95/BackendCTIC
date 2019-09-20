(function() {
    module.exports = function(app) {
      const Ctrl = require("./auth.controller")();
      app.route("/login").post(Ctrl.login2);
  
    };
  })();
  