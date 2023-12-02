import 'react-native-gesture-handler';
import React from 'react';
import SplashScreen from "../screens/Splash";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/RegisterScreen";
import MyComponent  from "../screens/MainScreen";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown:false}}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={SignUpScreen} />
                <Stack.Screen name="MainContainer" component={MyComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}