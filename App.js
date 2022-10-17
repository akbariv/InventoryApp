import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/app/navigation/Router';
import { Provider, useSelector } from 'react-redux';
import store from './src/app/redux/Store';

const MainApp = () =>{
  
  const stateGlobal =useSelector(state => state);
  

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