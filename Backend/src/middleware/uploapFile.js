const multer = require('multer');

const storage = multer.diskStorage({
    destination: '../uploads',
    filename: (req, file, cb) => {
        const extecion = file.originalname.slice(file.originalname.lastIndexOf('.'));
        cb(null, `${Date.now()} ${extecion}`);;
    }
});

const upload = multer({ storage }).single('image');

module.exports = upload;
