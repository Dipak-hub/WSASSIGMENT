import {View, Text, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getProducts} from '../../store/slice/product-slice';
import {clearConfigCache} from 'prettier';
import ProductList from '../../components/ProductList/ProductList';

export default function Products() {
  const dispatch = useDispatch();
  const {uid} = useSelector(state => state.auth);
  const {products} = useSelector(state => state.products);

  console.log(products);
  useEffect(() => {
    dispatch(getProducts(uid));
  }, [uid, products]);
  return (
    <View>
      <FlatList
        contentContainerStyle={{flexGrow: 1}}
        keyExtractor={(item, index) => String(index)}
        data={products}
        renderItem={({item}) => <ProductList item={item} />}
      />
    </View>
  );
}
