import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {heightToDp, widthToDp} from '../../utils/Dimensions/dimension';
import {useDispatch, useSelector} from 'react-redux';
import {editProducts} from '../../store';
import {useNavigation} from '@react-navigation/native';

export default function EditPage({route}) {
  const data = route.params;
  const [id, setId] = useState(data.data.id);
  const [name, setName] = useState(data.data.name);
  const [price, setPrice] = useState(data.data.price);
  const [offerPrice, setOfferPrice] = useState(data.data.offerPrice);
  const [image_url, setImage_url] = useState(data.data.image_url);
  const dispatch = useDispatch();
  const {uid} = useSelector(state => state.auth);
  const navigation = useNavigation();

  console.log(uid);

  const handleSubmit = () => {
    dispatch(editProducts({name, price, offerPrice, price, id, image_url, uid}))
      .unwrap()
      .then(() => {
        navigation.navigate('Products');
      });
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TextInput
        placeholder="Name"
        mode="outlined"
        style={{width: widthToDp(50)}}
        label={'Name'}
        onChangeText={val => {
          setName(val);
        }}
        value={name}
      />
      <TextInput
        placeholder="Price"
        mode="outlined"
        style={{width: widthToDp(50)}}
        label={'Price'}
        onChangeText={val => {
          setPrice(val);
        }}
        value={price}
      />
      <TextInput
        placeholder="Offer Price"
        mode="outlined"
        style={{width: widthToDp(50)}}
        label={'Offer Price'}
        onChangeText={val => {
          setOfferPrice(val);
        }}
        value={offerPrice}
      />

      {/* <TouchableOpacity
          onPress={() => bottomSheetHandle()}
          style={{
            width: widthToDp(40),
            height: heightToDp(5),
            backgroundColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Upload Image</Text>
        </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => handleSubmit()}
        style={{
          width: widthToDp(40),
          height: heightToDp(5),
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Sumbit</Text>
      </TouchableOpacity>
    </View>
  );
}
