const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, '..', 'media', 'upload');
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage });

module.exports = upload;
