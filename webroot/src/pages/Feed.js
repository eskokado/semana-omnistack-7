import React, { useState, useEffect } from 'react'
import { FaHeart, FaComment, FaShare, FaEllipsisH } from 'react-icons/fa'
import Loading from '../components/Loading'
import api from '../services/api'
import io from 'socket.io-client'
import '../styles/Feed.css'

const socket = io('http://localhost:3333')

function Feed () {
  const [isLoading, setIsLoading] = useState(true)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    async function fetchPosts () {
      const { data } = await api.get('/posts')
      setPosts(data)
    }

    fetchPosts()
  }, [])

  useEffect(() => {
    listenToNewPosts()
    listenToNewLikes()
  }, [])

  useEffect(() => {
    setIsLoading(false)
  }, [posts])

  function listenToNewPosts () {
    socket.on('newPost', newPost => {
      setPosts(posts => [newPost, ...posts])
    })
  }

  function listenToNewLikes () {
    socket.on('newLike', likedPost => {
      setPosts(posts => posts.map(post => post._id === likedPost._id ? likedPost : post))
    })
  }

  function handleLikeClick (id) {
    api.post(`/posts/${id}/like`)
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <section id="posts">
      {
        posts.map(post => (
          <article key={post._id}>
            <header>
              <div className="user-info">
                <span className="user-name">{post.author}</span>
                <span className="user-location">{post.location}</span>
              </div>

              <FaEllipsisH />
            </header>

            <img className="post-image" src={`http://localhost:3333/files/${post.image}`} alt="" />

            <footer>
              <div className="actions">
                <FaHeart className="like" onClick={() => handleLikeClick(post._id)} size={23} />
                <FaComment size={23} />
                <FaShare size={23} />
              </div>

              <strong>{post.likes} likes</strong>

              <p className="post-description">
                {post.description}
                <span className="post-hashtags">
                  {post.hashtags}
                </span>
              </p>
            </footer>
          </article>
        ))
      }
    </section>
  )
}

export default Feed
