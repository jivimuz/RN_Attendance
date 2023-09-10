import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './pages/Splash.screen';
import LoginScreen from './pages/Auth/Login.screen';
import HomeScreen from './pages/Home/home.screen';
import { colorPrimary, colorSecondary } from './Style/style';
import AbsensiScreen from './pages/Absensi/Absensi.screen';
import CutiScreen from './pages/Izin/Cuti.screen';
import SakitScreen from './pages/Izin/Sakit.screen';
import SendCutiScreen from './pages/Izin/Form/sendCuti.screen';
import SendSakitScreen from './pages/Izin/Form/sendSakit.screen';
import NotificationScreen from './pages/Extra/Notification.screen';

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Splash' options={{ headerShown: false, statusBarColor: colorSecondary }} component={SplashScreen} />
            <Stack.Screen name='Login' options={{ headerShown: false, statusBarColor: colorPrimary }} component={LoginScreen} />
            <Stack.Screen name='Home' options={{ headerShown: false, statusBarColor: colorSecondary }} component={HomeScreen} />
            <Stack.Screen name='Absensi' options={{
                headerShown: false,
                statusBarColor: 'white',
                // headerStyle: {
                //     backgroundColor: colorPrimary,
                // },
                // headerTintColor: 'white',
                // headerTitleAlign: 'center',
            }} component={AbsensiScreen} />

            <Stack.Screen name='Cuti' options={{ headerShown: false, statusBarColor: 'white' }} component={CutiScreen} />
            <Stack.Screen name='Sakit' options={{ headerShown: false, statusBarColor: 'white' }} component={SakitScreen} />
            <Stack.Screen name='Send Cuti' options={{ headerShown: false, statusBarColor: 'white' }} component={SendCutiScreen} />
            <Stack.Screen name='Send Sakit' options={{ headerShown: false, statusBarColor: 'white' }} component={SendSakitScreen} />

            <Stack.Screen name='Notification' options={{ headerShown: false, statusBarColor: 'white' }} component={NotificationScreen} />


        </Stack.Navigator>
    )
}

export default Route