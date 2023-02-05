import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash/SplashScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import RegisterScreen from '../screens/Register/RegisterScreen';
import LoginScreen from '../screens/Login/LoginScreen';
import BottomTab from './BottomTab';
import AddProduct from '../screens/Add-Product/AddProduct';
import EditProduct from '../screens/Edit-Product/EditProduct';
import EditPage from '../screens/EditPage/EditPage';

const Stack = createNativeStackNavigator();
export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="AddProduct" component={AddProduct} />
        <Stack.Screen name="EditProduct" component={EditProduct} />
        <Stack.Screen name="EditPage" component={EditPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
