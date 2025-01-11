import React from 'react';
import {useAppSelector, useAppDispatch} from '../../redux/hooks';
import {useNavigation} from '@react-navigation/native';
import {login} from '../../redux/slices/authSlice';

const AuthGuard = ({children}: any) => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(state => state.auth?.isAuthenticated);
  const navigation: any = useNavigation();

  React.useEffect(() => {
    dispatch(login());
    if (!isAuthenticated) {
      navigation.replace('LoginScreen'); // Arahkan ke LoginScreen jika belum login
    }
  }, [isAuthenticated, navigation, dispatch]);

  return isAuthenticated ? children : null; // Render layar jika sudah login
};

export default AuthGuard;
