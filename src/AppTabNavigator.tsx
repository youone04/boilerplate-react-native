import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { useAppSelector } from './redux/hooks';
import { useEffect } from 'react';
const Tab = createBottomTabNavigator();

export default function AppTabNavigator() {
  const {isShowHeader} = useAppSelector(state => state.showHeaderReducer);
  useEffect(() => {
  },[isShowHeader]);
  return (
   <NavigationContainer >
     <Tab.Navigator screenOptions={{headerShown: !isShowHeader}}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={LoginScreen} />
    </Tab.Navigator>
   </NavigationContainer>
  );
}