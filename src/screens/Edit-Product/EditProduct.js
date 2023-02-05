import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {heightToDp, widthToDp} from '../../utils/Dimensions/dimension';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {deleteProduct} from '../../store';

export default function EditProduct({route}) {
  const data = route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(data.data.id))
      .unwrap()
      .then(() => {
        navigation.navigate('Products');
      });
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{uri: data.data.image_url}}
        style={{width: widthToDp(90), height: heightToDp(50)}}
        resizeMode="contain"
      />
      <Text style={{color: 'black'}}>Name:{data.data.name}</Text>
      <Text style={{color: 'black'}}>Price:{data.data.price}</Text>
      <Text style={{color: 'black'}}>Offer Price:{data.data.offerPrice}</Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('EditPage', {data: data.data})}
          style={{
            width: widthToDp(40),
            height: heightToDp(5),
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => handleDelete()}
          style={{
            width: widthToDp(40),
            height: heightToDp(5),
            backgroundColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
            margin: widthToDp(5),
          }}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
