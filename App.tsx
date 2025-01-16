import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/AppNavigator';
import { store } from './src/redux/store';
import AppTabNavigator from './src/AppTabNavigator';

const App = () => {
  return (
    <Provider store={store}>
      {/* <AppNavigator /> */}
      <AppTabNavigator/>
    </Provider>
  );
};
export default App;