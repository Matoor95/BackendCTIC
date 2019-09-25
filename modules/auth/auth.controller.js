(function () {
  const Users = require("../users/users.model").userModel;
  const Edition = require("../edition/edition.model").editionModel;
  
  const bcrypt = require("bcrypt");
  const saltRounds = 10,
    jwt = require("jsonwebtoken");
  module.exports = function () {
    return {
      login2: async (req, res) => {
        console.log("connect ", req.body)
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
      
      addEdition: async (req, res) => {
        let edition = new Edition(req.body);
        edition.save()
          .then(edition => {
            res.status(200).json({'edition': 'edition in added successfully'});
          })
          .catch(err => {
          res.status(400).send("unable to save to database");
          });
      },
    

      
    };
  };
})();