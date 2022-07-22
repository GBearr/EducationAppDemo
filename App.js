import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import {create} from 'react-test-renderer';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Education App Demo',
    },
  },
);

export default createAppContainer(navigator);
