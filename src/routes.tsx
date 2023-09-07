import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './pages/Splash.screen';
import LoginScreen from './pages/Auth/login.screen';

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Splash' options={{ headerShown: false }} component={SplashScreen} />

            <Stack.Screen name='Login' options={{ headerShown: false }} component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default Route