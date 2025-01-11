import React from 'react';
import { Button, View, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/authSlice';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigate:any = useNavigation()


  const handleLogin = () => {
    dispatch(login()); // Tandai pengguna sebagai login
    navigate.navigate('Home')
  };
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
