(function () {
  const Users = require("../users/users.model").userModel;
  const bcrypt = require("bcrypt");
  const saltRounds = 10,
    jwt = require("jsonwebtoken");
  module.exports = function () {
    return {
      login2: async (req, res) => {
        let user = await Users.findOne({ username: req.body.login, password: req.body.password });
        if (user) {
          return res.json({
            status: 'success',
            message: user
          })
        }
        return res.status(404).json({
          status: "error",
          message: "nom utilisateur ou password incorrecte"
        })
      },
      login: async (req, res) => {
        let user = await Users.findOne({ username: req.body.username });
        if (!user)
          return res.json({
            status: "error",
            body: "Nom d'utilisateur incorrecte"
          });
        bcrypt
          .compare(req.body.password, user.password)
          .then(function (correct) {
            if (correct) {
              let reponse = {
                _id: user._id,
                username: user.username,
              };
              let token = jwt.sign(
                {
                  data: reponse
                },
                "secret",
                { expiresIn: 60 * 60 }
              );
              reponse.token = token;
              return res.json({
                status: "success",
                body: reponse
              });
            } else {
              return res.json({
                status: "error",
                body: "Mot de passe incorrecte"
              });
            }
          });
      },
    };
  };
})();