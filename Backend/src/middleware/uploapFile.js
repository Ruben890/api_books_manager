const multer = require('multer');


// Configuración del almacenamiento del archivo utilizando multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../media/upload')
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}`)
    }
});

// Configuración del middleware de multer con limitaciones de tamaño y tipo de archivo permitido
const upload = multer({ storage: storage });

module.exports = upload;
