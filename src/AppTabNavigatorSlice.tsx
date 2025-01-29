import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHome,
  faUser,
  faGraduationCap,
  faFilePdf
} from '@fortawesome/free-solid-svg-icons';

import HomeScreen from './screens/Slicing-1/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import {useAppSelector} from './redux/hooks';
import {useEffect} from 'react';
import TestGridScreen from './screens/TestGridScrenn';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CoursesOverView from './screens/Slicing-1/CoursesOverVIew';
import {View} from 'react-native';
import { IconLeft, IconRight } from './component/Slicing-1/HeaderMod';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function AppTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let iconName: any;
          if (route.name === 'home') {
            iconName = faHome;
          } else if (route.name === 'graduation') {
            iconName = faGraduationCap;
          } else if (route.name === 'profile') {
            iconName = faUser;
          } else {
            iconName = faFilePdf;
          }
          const iconColor: string = focused ? '#3D8FEF' : '#D1D1D1';
          return (
            <FontAwesomeIcon icon={iconName} size={25} color={iconColor} />
          );
        },
        tabBarLabel() {
          return null;
        },
        tabBarStyle: {
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
      })}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Tab.Screen name="resources" component={LoginScreen} options={{}} />
      <Tab.Screen name="graduation" component={LoginScreen} options={{}} />
      <Tab.Screen
        name="profile"
        component={TestGridScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
export default function AppTabNavigatorSlice() {
  const {isShowHeader} = useAppSelector(state => state.showHeaderReducer);
  useEffect(() => {}, [isShowHeader]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown:false
        }} name="Home" component={AppTabNavigation} />
        <Stack.Screen
          options={({navigation}) => ({
            headerLeft: () => (
             <IconLeft navigation={navigation}/>
            ),
            headerRight: () => <IconRight/>,
            title: 'Corses Overview',
            headerTitleAlign: 'center',
            headerBackground: () => <View></View>,
          })}
          name="Courses-overview"
          component={CoursesOverView}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
