import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './pages/Splash.screen';
import LoginScreen from './pages/Auth/Login.screen';
import HomeScreen from './pages/Home/home.screen';
import { colorPrimary, colorSecondary } from './Style/style';

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Splash' options={{ headerShown: false, statusBarColor: colorSecondary }} component={SplashScreen} />
            <Stack.Screen name='Login' options={{ headerShown: false, statusBarColor: colorPrimary }} component={LoginScreen} />
            <Stack.Screen name='Home' options={{ headerShown: false, statusBarColor: colorSecondary }} component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default Route