(function () {
  const Edition = require("./edition.model").editionModel;
  const uploadFile = require("../../utils/file-upload").uploadFile;
  const multer = require("multer");
  const fs = require("fs");
  module.exports = function () {
    return {


      addEdition: async (req, res) => {
        console.log("body ", req.body);
        let edition = new Edition(req.body);
        edition.save()
          .then(edition => {
            res.status(200).json({ 'edition': 'edition in added successfully' });
          })
          .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database");
          });
      },
      liste: async (req, res) => {
        Edition.find()
          .then(editions => {
            console.log(editions)
            res.status(200).json({ 'message': editions });
          })
          .catch(err => {
            console.log(err);
            res.status(400).send("unable to save to database");
          });
      },

      create: async (req, res) => {
        upload = multer({ dest: "dist/attachments" }).single("image");
        upload(req, res, function (error) {
          if (error || !req.file) {
            return res.status(500).json({
              message: "Erreur lors de l'enregistrement du fichier",
              error: error
            });
          } else {
            oldPath = req.file.path;
            extension = req.file.originalname.split(".");
            nbItems = extension.length;
            extension = extension[nbItems - 1];
            newPath = oldPath + "." + extension;
            fs.rename(oldPath, newPath, err => {
              req.body.file = req.file.filename + "." + extension;
              let edition = new Edition(req.body);
              response = edition.save();
              res.json({
                status: "success",
                message: reponse
              });




            });
          }
        });
      },

      attacheFile: (req, res) => {
        upload = multer({ dest: "dist/attachments" }).single("image");
        upload(req, res, function (error) {
          if (error || !req.file) {
            return res.status(500).json({
              message: "Erreur lors de l'enregistrement du fichier",
              error: error
            });
          } else {
            oldPath = req.file.path;
            extension = req.file.originalname.split(".");
            nbItems = extension.length;
            extension = extension[nbItems - 1];
            newPath = oldPath + "." + extension;
            fs.rename(oldPath, newPath, err => {
              const nameInDir = req.file.filename + "." + extension;
              Edition.findByIdAndUpdate(
                { _id: req.params.editionId },
                { image: nameInDir },
                function (err) {
                  return res.json({
                    message: "File uploaded",
                    body: req.file
                  });
                }
              );
            });
          }
        });
      }



    };

  };
})();