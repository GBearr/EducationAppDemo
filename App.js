import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import HomeScreen2 from './src/screens/HomeScreen2';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Home2: HomeScreen2,
  },
  {
    initialRouteName: 'Home2',
    defaultNavigationOptions: {
      title: 'Education App Demo',
    },
  },
);

export default createAppContainer(navigator);
