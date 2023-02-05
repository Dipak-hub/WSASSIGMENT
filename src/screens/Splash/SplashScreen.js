import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import style from './style';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const {isLoggedIn} = useSelector(state => state.auth);
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      checkAuth();
    }, 3000);
  }, []);

  const checkAuth = () => {
    if (isLoggedIn) {
      navigation.reset({
        index: 0,
        routes: [{name: 'BottomTab'}],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    }
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'blue', fontSize: 28, fontWeight: 'bold'}}>
        WS Assignment
      </Text>
    </View>
  );
}
