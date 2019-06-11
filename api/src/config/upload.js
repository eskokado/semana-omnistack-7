const multer = require('multer')
const path = require('path')

module.exports = {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: function (req, file, cb) {
      const fileName = `${Math.random()}_${file.originalname}`
      cb(null, fileName)
    }
  })
}
