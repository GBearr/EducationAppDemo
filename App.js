import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ContentDetail from './src/screens/ContentDetail';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Content: ContentDetail,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

export default createAppContainer(navigator);
