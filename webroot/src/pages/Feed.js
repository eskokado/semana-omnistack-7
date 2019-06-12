import React, { Component } from 'react'
import more from '../assets/more.svg'
import like from '../assets/like.svg'
import comment from '../assets/comment.svg'
import send from '../assets/send.svg'
import '../styles/Feed.css'

class Feed extends Component {
  render () {
    return (
      <section id="posts">
        <article>
          <header>
            <div className="user-info">
              <span className="user-name">Gabriel Fernandes</span>
              <span className="user-location">Novo Hamburgo, RS</span>
            </div>

            <img src={more} alt="More..." />
          </header>

          <img className="post-image" src="https://picsum.photos/500/500" alt=""/>

          <footer>
            <div className="actions">
              <img src={like} alt="More..." />
              <img src={comment} alt="More..." />
              <img src={send} alt="More..." />
            </div>

            <strong>900 likes</strong>

            <p className="post-description">
              Lorem ipsum dolor sit amet
              <span className="post-hashtags">
                #foo #bar #lorem
              </span>
            </p>
          </footer>
        </article>
      </section>
    )
  }
}

export default Feed
