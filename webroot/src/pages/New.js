import React, { useState } from 'react'
import api from '../services/api'
import '../styles/Post.css'

function Post (props) {
  const [post, setPost] = useState({})

  async function handleOnSubmit (e) {
    e.preventDefault()

    const data = new FormData()
    data.append('image', post.image)
    data.append('author', post.author)
    data.append('location', post.location)
    data.append('legend', post.legend)
    data.append('hashtags', post.hashtags)

    await api.post('/posts', data)

    props.history.push('/')
  }

  function handleOnImageChange (e) {
    setPost({ ...post, image: e.target.files[0] })
  }

  function handleOnChange (e) {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  return (
    <form id="new-post" onSubmit={handleOnSubmit}>
      <input type="file" name="image" onChange={handleOnImageChange} />
      <input type="text" name="author" value={post.author} onChange={handleOnChange} placeholder="Author's name" />
      <input type="text" name="location" value={post.location} onChange={handleOnChange} placeholder="Location" />
      <input type="text" name="legend" value={post.legend} onChange={handleOnChange} placeholder="Say something about it" />
      <input type="text" name="hashtags" value={post.hashtags} onChange={handleOnChange} placeholder="#sup?" />
      <button type="submit">Criar</button>
    </form>
  )
}

export default Post
