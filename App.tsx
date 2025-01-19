import React from 'react';
import { Provider } from 'react-redux';
// import AppNavigator from './src/AppNavigator';
import { store } from './src/redux/store';
import AppTabNavigatorSlice from './src/AppTabNavigatorSlice';
// import AppTabNavigator from './src/AppTabNavigator';

const App = () => {
  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      {/* <AppTabNavigator/> */}
      <AppTabNavigatorSlice/>
    </Provider>
  );
};
export default App;