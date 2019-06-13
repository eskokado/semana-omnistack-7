const Post = require('../models/Post')
const HTTP = require('../utils/httpStatus')

class LikeController {
  async store ({ io, params }, res) {
    const post = await Post.findById(params.id)

    if (!post) {
      return res.status(HTTP.NOT_FOUND).send({ error: 'Post not found' })
    }

    post.likes += 1
    await post.save()

    io.emit('newLike', post)

    return res.json(post)
  }
}

module.exports = new LikeController()
