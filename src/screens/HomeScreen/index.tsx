import { Text, View } from "react-native";
import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchProductsThunk} from '../../redux/slices/productsSlices';


export default function HomeScreen(){
    const dispatch = useAppDispatch();
   const {products, error, loading}  = useAppSelector(state => state.products);
    console.log('products', products)
    console.log('loading',loading)
    console.log('error',error)


    useEffect(() => {
      dispatch(fetchProductsThunk());
    }, [dispatch]);

    return(
        <View>
            <Text>Home</Text>
        </View>
    )
}