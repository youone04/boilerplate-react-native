import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchProductsThunk} from '../../redux/slices/productsSlices';
import {useNavigation} from '@react-navigation/native';
import ShowHideHeader from '../../component/ShowHideHeader';

const HomeScreen  = () => {
  const dispatch = useAppDispatch();
  const navigate: any = useNavigation();
  const {products, error, loading} = useAppSelector(state => state.products);

  // console.log('products', products)
  // console.log('loading',loading)
  // console.log('error',error)

  useEffect(() => {
    dispatch(fetchProductsThunk());
  }, [dispatch]);

  return (
    <View>
      <ShowHideHeader/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default  HomeScreen;