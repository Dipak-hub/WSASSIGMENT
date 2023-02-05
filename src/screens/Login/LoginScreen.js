import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import style from './style';
import LoginImage from '../../assets/4957136.jpg';
import {useNavigation} from '@react-navigation/native';
import {widthToDp} from '../../utils/Dimensions/dimension';
import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../store/slice/auth-slice';
import {TextInput} from 'react-native-paper';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {errorMessage} = useSelector(state => state.auth);

  const {loading} = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const handleLogin = () => {
    if (email == '') {
      alert('Please enter email');
    } else if (password == '') {
      alert('please enter password');
    }
    dispatch(login({email, password}))
      .unwrap()
      .then(() => {
        navigation.navigate('BottomTab');
      })
      .catch(e => {
        alert(errorMessage);
      });
  };
  return (
    <View style={style.container}>
      <Image
        source={LoginImage}
        resizeMode="contain"
        style={style.ImageStyle}
      />

      <TextInput
        placeholder="Email"
        mode="outlined"
        style={{width: widthToDp(50)}}
        label={'Email'}
        onChangeText={val => {
          setEmail(val);
        }}
        value={email}
      />
      <TextInput
        secureTextEntry
        placeholder="Password"
        mode="outlined"
        style={{width: widthToDp(50)}}
        label={'Password'}
        onChangeText={val => {
          setPassword(val);
        }}
        value={password}
      />

      <TouchableOpacity
        onPress={() => handleLogin()}
        style={style.registerButton}>
        {loading == true ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <Text>Login</Text>
        )}
        {/* {Object.keys(errorMessage).length === 0 && loading == true
          ? null
          : alert('Wrong Email or Password')} */}
      </TouchableOpacity>
      <View style={style.registerLinkContainer}>
        <Text style={{color: 'black'}}>Dont have an account?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Register')}
          style={{paddingHorizontal: widthToDp(1)}}>
          <Text style={{color: 'blue', textDecorationStyle: 'dashed'}}>
            Register here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
