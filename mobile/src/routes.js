import { createAppContainer, createStackNavigator } from 'react-navigation'
import FeedConfig from './pages/Feed/config'
import NewConfig from './pages/New/config'

export default createAppContainer(
  createStackNavigator({
    Feed: FeedConfig,
    New: NewConfig
  }, {
    defaultNavigationOptions: {
      headerBackTitle: null,
      headerTintColor: '#000'
    },
    mode: 'modal'
  })
)
