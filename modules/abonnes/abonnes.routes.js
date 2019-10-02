(function () {
    module.exports = function (app) {
      const Ctrl = require("./abonnes.controller")();
      app.route("/addAbonne").post(Ctrl.addAbonne);
    };
  })();
  