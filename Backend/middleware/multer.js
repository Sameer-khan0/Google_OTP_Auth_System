const multer=require('multer')
const fs=require('fs')

const storage=multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = './uploads';
        if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
      } ,
      filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
      }
})

const upload=multer({storage:storage})
module.exports=upload