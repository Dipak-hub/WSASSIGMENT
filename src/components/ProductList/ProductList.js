import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {heightToDp, widthToDp} from '../../utils/Dimensions/dimension';
import {useNavigation} from '@react-navigation/native';

export default function ProductList({item}) {
  console.log(item.image_url);
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('EditProduct', {data: item})}
      style={{alignItems: 'center', padding: widthToDp(5)}}>
      <Image
        source={{uri: item.image_url}}
        style={{width: widthToDp(90), height: 300, borderRadius: 10}}
      />
      <View
        style={{
          backgroundColor: 'white',
          width: widthToDp(90),
          height: heightToDp(5),
          borderRadius: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <Text style={{color: 'black'}}>Name:{item.name}</Text>
        <Text style={{color: 'black'}}>Price:{item.price}</Text>
        <Text style={{color: 'black'}}>Offer Price:{item.offerPrice}</Text>
      </View>
    </TouchableOpacity>
  );
}
