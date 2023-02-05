import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
import Products from '../screens/Products/Products';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
export default function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="home" size={20} color="black" />
          ),
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: () => (
            <FontAwesomeIcon name="product-hunt" size={20} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
