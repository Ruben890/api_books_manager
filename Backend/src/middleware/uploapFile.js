const multer = require('multer');
const sharp = require('sharp');

// Configuración del almacenamiento del archivo utilizando multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../media/upload')
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${ext}`)
    }
});

// Configuración del middleware de multer con limitaciones de tamaño y tipo de archivo permitido
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5 MB
    },
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('File type not supported'), false);
        }
    }
});

// Middleware que maneja la carga de un solo archivo con multer y procesa las imágenes utilizando sharp
const uploadFile = async (req, res, next) => {
    try {
        if (req.file) {
            const buffer = await sharp(req.file.buffer)
                .resize({ width: 500, height: 500 })
                .png()
                .toBuffer();
            req.file.buffer = buffer;
        }
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: 'Internal server error'
        });
    }
};

module.exports = {
    uploadFile
};

