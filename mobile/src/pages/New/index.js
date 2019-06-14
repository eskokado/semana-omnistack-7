import React, { useState } from 'react'
import { Text } from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { Container, ImageButton, Preview, Input, SubmitButton, ButtonText } from './styles'
import api from '../../services/api'

function New (props) {
  const [previewImage, setPreviewImage] = useState(null)
  const [post, setPost] = useState({})

  function handleChooseImageClick () {
    ImagePicker.showImagePicker({
      title: 'Choose image'
    }, upload => {
      if (upload.error || upload.didCancel) {
        return console.log('Nothing')
      }

      setPreviewImage({ uri: `data:image/jpeg;base64,${upload.data}` })
      _setPostImage(upload)
    })
  }

  function _setPostImage (upload) {
    let prefix = new Date().getTime()
    let ext

    if (upload.fileName) {
      [prefix, ext] = upload.fileName.split('.')
      ext = ext.toLowerCase() === 'heic' ? 'jpg' : ext
    } else {
      ext = 'jpg'
    }

    const image = {
      uri: upload.uri,
      type: upload.type,
      name: `${prefix}.${ext}`
    }

    setPost({ image })
  }

  function handleOnChange (e) {
    const key = Object.keys(e)[0]

    setPost({ ...post, [key]: e[key] })
  }

  async function handleOnSubmit () {
    const data = new FormData()
    data.append('image', post.image)
    data.append('author', post.author)
    data.append('location', post.location)
    data.append('legend', post.legend)
    data.append('hashtags', post.hashtags)

    await api.post('/posts', data)

    props.navigation.navigate('Feed')
  }

  console.tron.log(props)

  return (
    <Container>
      <ImageButton onPress={handleChooseImageClick}>
        <Text>Choose image</Text>
      </ImageButton>

      { previewImage && <Preview source={previewImage} /> }

      <Input placeholder="Author's name" onChangeText={(author) => handleOnChange({ author })} />
      <Input placeholder="Location" onChangeText={(location) => handleOnChange({ location })} />
      <Input placeholder="Say something" onChangeText={(legend) => handleOnChange({ legend })} />
      <Input placeholder="#sup" onChangeText={(hashtags) => handleOnChange({ hashtags })} />

      <SubmitButton onPress={handleOnSubmit}>
        <ButtonText>Submit</ButtonText>
      </SubmitButton>
    </Container>
  )
}

export default New
