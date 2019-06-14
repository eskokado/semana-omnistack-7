import React from 'react'
import { Image, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Feed from './index'
import logo from '../../assets/logo.png'

module.exports = {
  screen: Feed,
  navigationOptions: ({ navigation }) => ({
    headerTitle: (<Image style={{ marginHorizontal: 20 }} source={logo} />),
    headerRight: (
      <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('New')}>
        <Icon name="camera" size={23} color="#000" />
      </TouchableOpacity>
    )
  })
}
