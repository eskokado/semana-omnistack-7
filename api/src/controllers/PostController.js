const Post = require('../models/Post')
const HTTP = require('../utils/httpStatus')

class PostController {
  async index (req, res) {
    const posts = await Post.find().sort('-createdAt')
    return res.json(posts)
  }

  async store (req, res) {
    const { author, location, legend, hashtags } = req.body
    const { filename: image } = req.file
    const post = await Post.create({ author, location, legend, hashtags, image })

    req.io.emit('newPost', post)

    return res.status(HTTP.CREATED).send(post)
  }
}

module.exports = new PostController()
