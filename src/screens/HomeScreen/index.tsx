import { Button, Text, TouchableOpacity, View } from "react-native";
import React, {useEffect} from 'react';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchProductsThunk} from '../../redux/slices/productsSlices';
import { useNavigation } from "@react-navigation/native";

useNavigation

export default function HomeScreen(){
    const dispatch = useAppDispatch();
    const navigate:any = useNavigation();
   const {products, error, loading}  = useAppSelector(state => state.products);

    // console.log('products', products)
    // console.log('loading',loading)
    // console.log('error',error)


    useEffect(() => {
      dispatch(fetchProductsThunk());
    }, [dispatch]);

    return(
        <View>
            <Text>Home</Text>
            <TouchableOpacity >
                <Button onPress={() => navigate.navigate('User')} title="Go User View"/>
            </TouchableOpacity>
        </View>
    )
}