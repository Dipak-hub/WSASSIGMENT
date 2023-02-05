import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {widthToDp} from '../../utils/Dimensions/dimension';

export default function style() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [offerPrice, setOfferPrice] = useState();
  return (
    <View>
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
    </View>
  );
}
