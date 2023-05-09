const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath = path.join(__dirname, "../uploads");
        cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
        const extecion = file.originalname.slice(file.originalname.lastIndexOf('.'));
        cb(null, `${Date.now()}${extecion}`);
    }
});

const upload = multer({ storage }).single('image');

module.exports = upload;
