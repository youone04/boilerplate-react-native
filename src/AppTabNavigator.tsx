import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHome, faSackDollar, faCreditCard, faUser } from '@fortawesome/free-solid-svg-icons';


import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { useAppSelector } from './redux/hooks';
import { useEffect } from 'react';
import TestGridScreen from './screens/TestGridScrenn';
const Tab = createBottomTabNavigator();

export default function AppTabNavigator() {
  const {isShowHeader} = useAppSelector(state => state.showHeaderReducer);
  useEffect(() => {
  },[isShowHeader]);
  return (
   <NavigationContainer >
     <Tab.Navigator  screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName: any;
        if (route.name === 'home') {
          iconName = faHome;
        } else if (route.name === 'profile') {
          iconName = faSackDollar;
        } else if (route.name === 'grid') {
          iconName = faCreditCard
        } else {
          iconName = faUser
        }
        return <FontAwesomeIcon icon={iconName} />;
      },
    })}>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="profile" component={LoginScreen} />
      <Tab.Screen name='grid' component={TestGridScreen} options={{
        headerShown: false
      }}/>
    </Tab.Navigator>
   </NavigationContainer>
  );
}