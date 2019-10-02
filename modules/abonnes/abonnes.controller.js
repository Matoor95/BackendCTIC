(function () {
    const Abonnes = require("./abonnes.model").editionModel;
    module.exports = function () {
      return {
        
        
        addAbonne: async (req, res) => {
          let abonnes = new Abonnes(req.body);
          abonnes.save()
            .then(edition => {
              res.status(200).json({'abonnes': 'Abonnes in added successfully'});
            })
            .catch(err => {
            res.status(400).send("unable to save to database");
            });
        }
      
  
        
      };
      
    };
  })();