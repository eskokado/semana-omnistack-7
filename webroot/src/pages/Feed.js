import React, { Component } from 'react'
import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'
import api from '../services/api'
import '../styles/Feed.css'

class Feed extends Component {
  constructor () {
    super()

    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const response = await api.get('posts')
    this.setState({ posts: response.data })
  }

  render () {
    return (
      <section id="posts">
        {this.state.posts.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span className="user-name">{post.author}</span>
                <span className="user-location">{post.location}</span>
              </div>

              <img src={more} alt="More..." />
            </header>

            <img className="post-image" src="https://picsum.photos/500/500" alt="" />

            <footer>
              <div className="actions">
                <img src={like} alt="More..." />
                <img src={comment} alt="More..." />
                <img src={send} alt="More..." />
              </div>

              <strong>{post.likes} likes</strong>

              <p className="post-description">
                {post.legend}
                <span className="post-hashtags">
                  {post.hashtags}
                </span>
              </p>
            </footer>
          </article>
        ))}
      </section>
    )
  }
}

export default Feed
