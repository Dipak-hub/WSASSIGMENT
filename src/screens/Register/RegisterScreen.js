import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {widthToDp} from '../../utils/Dimensions/dimension';
import style from './style';
import {useDispatch, useSelector} from 'react-redux';
import {register} from '../../store/slice/auth-slice';
import {useNavigation} from '@react-navigation/native';
import LoginImage from '../../assets/4957136.jpg';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {loading} = useSelector(state => state.auth);

  const navigation = useNavigation();

  const dispatch = useDispatch();
  const handleRegister = () => {
    if (name == '') {
      alert('Please enter name');
    } else if (email == '') {
      alert('Please ente email');
    } else if (password == '') {
      alert('Please ente password');
    } else {
      dispatch(register({username: name, email, password}))
        .unwrap()
        .then(() => {
          navigation.navigate('Login');
        });
    }
  };
  return (
    <View style={style.container}>
      <Image
        source={LoginImage}
        resizeMode="contain"
        style={style.ImageStyle}
      />
      <TextInput
        placeholder="User Name"
        mode="outlined"
        style={{width: widthToDp(50)}}
        label={'User Name'}
        onChangeText={val => {
          setName(val);
        }}
        value={name}
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
        onPress={() => handleRegister()}
        style={style.registerButton}>
        {loading == true ? (
          <ActivityIndicator size="small" color="black" />
        ) : (
          <Text>Register</Text>
        )}
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: widthToDp(5),
        }}>
        <Text style={{color: 'black'}}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={{color: 'blue'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
