import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import io from 'socket.io-client'
import { Container, Post, Header, UserInfo, Author, Location, Picture, Footer, Actions, Likes, Legend, Hashtags, Button } from './styles'
import api from '../../services/api'

const socket = io('http://localhost:3333')

function Feed () {
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

  return (
    <Container>
      <FlatList
        data={posts}
        keyExtractor={post => post._id}
        renderItem={({ item }) => (
          <Post>
            <Header>
              <UserInfo>
                <Author>{item.author}</Author>
                <Location>{item.location}</Location>
              </UserInfo>

              <Icon name="ellipsis-h" size={20} color="#555" />
            </Header>

            <Picture source={{ uri: `http://10.0.3.2:3333/files/${item.image}` }} />

            <Footer>
              <Actions>
                <Button onPress={() => handleLikeClick(item._id)}>
                  <Icon name="heart" size={21} color="#555" />
                </Button>
                <Button>
                  <Icon name="comment" size={21} color="#555" />
                </Button>
                <Button>
                  <Icon name="share" size={21} color="#555" />
                </Button>
              </Actions>

              <Likes>{item.likes} like(s)</Likes>
              <Legend>{item.legend} {item.hashtags && <Hashtags>{`- ${item.hashtags}`}</Hashtags>}</Legend>
            </Footer>
          </Post>
        )}
      />
    </Container>
  )
}

export default Feed
