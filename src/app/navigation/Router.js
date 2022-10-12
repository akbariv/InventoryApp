import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginContainer from '../../modules/Login/LoginContainer';
import HomeContainer from '../../modules/Home/HomeContainer';
import InputDataContainer from '../../modules/InputData/InputDataContainer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createStackNavigator();


const Router = () =>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown: false
          }}>
            <Stack.Screen name="Login" component={LoginContainer}/>
            <Stack.Screen name="Home" component={HomeContainer}/>
            <Stack.Screen name="Input" component={InputDataContainer}/>
            
        </Stack.Navigator>
    )
}

export default Router;
