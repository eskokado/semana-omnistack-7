import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
`
export const Button = styled.TouchableOpacity`
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`
export const ImageButton = styled(Button)`
  background: #eee;
`

export const Preview = styled.Image.attrs({
  resizeMode: 'cover'
})`
  margin-top: 10px;
  width: 100%;
  height: 270;
`

export const Input = styled.TextInput.attrs({
  autoCorrect: false,
  autoCapitalize: 'none',
  borderColor: '#ccc'
})`
  height: 40px;
  border-radius: 4px;
  border-width: 1px;
  margin-top: 10px;
  padding: 10px;
  font-size: 12px;
`

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  background: #7159c1;
`

export const ButtonText = styled.Text`
  color: #FFF;
  font-weight: bold;
`
