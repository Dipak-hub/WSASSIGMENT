import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {authStateClear, getUser, userStateClear} from '../../store';
import style from './style';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const {uid} = useSelector(state => state.auth);
  const {user} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log(uid);
  useEffect(() => {
    dispatch(getUser(uid));
  }, [uid]);
  const logout = () => {
    dispatch(authStateClear());
    dispatch(userStateClear());
    navigation.navigate('Login');
  };
  return (
    <View style={style.container}>
      <View style={style.headerSection}>
        <Text style={{color: 'black', fontSize: 30, fontWeight: '900'}}>
          Hello,{user?.username}
        </Text>
        <TouchableOpacity onPress={() => logout()} style={style.logOutButton}>
          <MaterialCommunityIcons name="power" color={'black'} size={40} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={style.buttonContainer}>
          <TouchableOpacity
            style={style.addProductButton}
            onPress={() => navigation.navigate('AddProduct')}>
            <Text style={{color: 'white'}}>Add Product</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.viewProductButton}
            onPress={() => navigation.navigate('Products')}>
            <Text style={{color: 'white'}}>View Products</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
