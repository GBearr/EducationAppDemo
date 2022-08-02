import {createStackNavigator} from '@react-navigation/stack';
import {createAppContainer} from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ContentDetail from './src/screens/ContentDetail';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const HomeStack = createStackNavigator();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeTabNavigator} />
    </Tab.Navigator>
  );
}

function HomeTabNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={() => ({
        headerShown: false,
      })}>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Content" component={ContentDetail} />
    </HomeStack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={() => ({
          headerShown: false,
        })}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const navigator = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Content: ContentDetail,
//     Login: LoginScreen,
//     Register: RegisterScreen,
//   },
//   {
//     initialRouteName: 'Login',
//     defaultNavigationOptions: {
//       headerShown: false,
//     },
//   },
// );

// export default createAppContainer(navigator);
