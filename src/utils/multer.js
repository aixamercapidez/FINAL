const multer = require("multer");
const { dirname } = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        //console.log(file);
        //Segun el nombre del campo es donde guardo la imagen.
        switch (file.fieldname) {
            case "profile":
                cb(null, `${dirname(__dirname)}/public/profile`);
                break;

            case "products":
                cb(null, `${dirname(__dirname)}/public/products`);
                break;
            default:
                cb(null, `${dirname(__dirname)}/public/documents`);
                break;
        }
    },
    filename: (req, file, cb) => {
        //console.log(file);
        //console.log(req.params.uid);
        //nombre compuesto por: campo-UserId-NombreOriginal.
        cb(null, `${file.fieldname}-${req.params.UID}-${file.originalname}`);
    },
});

const uploader = multer({
    storage,
    onError: function (err, next) {
        console.log("err");
       
    },
});

module.exports = uploader