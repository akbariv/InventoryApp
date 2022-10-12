/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/app/navigation/Router';
import { Provider, useSelector } from 'react-redux';
import store from './src/app/redux/Store';

const MainApp = () =>{
  
  const stateGlobal =useSelector(state => state);
  console.log ('state global: ',stateGlobal);

  return(
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    
    ); 
};


const App = () =>{
  
  return(
    <Provider store={store}>
      <MainApp/>
    </Provider>
    ); 
};

export default App;