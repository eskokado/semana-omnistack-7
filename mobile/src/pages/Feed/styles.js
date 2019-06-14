import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Post = styled.View`
  margin-top: 5px;
  margin-bottom: 20px;
`

export const Header = styled.View`
  padding: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const UserInfo = styled.View`
  margin-bottom: 15px;
`

export const Author = styled.Text`
  font-size: 14px;
  color: #000;
`

export const Location = styled.Text`
  font-size: 11px;
  color: #666;
`

export const Picture = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: 100%;
  height: 270;
`

export const Footer = styled.View`
  padding: 20px;
`

export const Actions = styled.View`
  flex-direction: row;
`

export const Button = styled.TouchableOpacity`
  margin-right: 12px;
`

export const Likes = styled.Text`
  margin-top: 5px;
  font-weight: bold;
  color: #000;
`

export const Legend = styled.Text`
  margin-top: 7px;
  line-height: 18px;
  color: #000;
`

export const Hashtags = styled.Text`
  margin-top: 5px;
  color: #727f;
  font-size: 11px;
`
