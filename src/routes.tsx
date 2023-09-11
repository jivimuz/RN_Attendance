import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './pages/Splash.screen';
import LoginScreen from './pages/Auth/Login.screen';
import HomeScreen from './pages/Home/home.screen';
import { colorNegative, colorPrimary, colorSecondary } from './Style/style';
import AbsensiScreen from './pages/Absensi/Absensi.screen';
import CutiScreen from './pages/Izin/Cuti.screen';
import SakitScreen from './pages/Izin/Sakit.screen';
import SendCutiScreen from './pages/Izin/Form/sendCuti.screen';
import SendSakitScreen from './pages/Izin/Form/sendSakit.screen';
import NotificationScreen from './pages/Extra/Notification.screen';
import AccountScreen from './pages/Account/Account.screen';
import ProfileScreen from './pages/Account/Profile/Profile.screen';

const Stack = createNativeStackNavigator();

const Route = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name='Splash' options={{ headerShown: false, statusBarColor: colorSecondary }} component={SplashScreen} />

            <Stack.Screen name='Login' options={{ headerShown: false, statusBarColor: colorPrimary }} component={LoginScreen} />

            <Stack.Screen name='Home' options={{ headerShown: false, statusBarColor: colorSecondary }} component={HomeScreen} />

            <Stack.Screen name='Account' options={{ headerShown: false, statusBarColor: colorNegative }} component={AccountScreen} />
            <Stack.Screen name='Profile' options={{ headerShown: false, statusBarColor: colorNegative }} component={ProfileScreen} />

            <Stack.Screen name='Absensi' options={{ headerShown: false, statusBarColor: colorNegative }} component={AbsensiScreen} />

            <Stack.Screen name='Cuti' options={{ headerShown: false, statusBarColor: colorSecondary }} component={CutiScreen} />
            <Stack.Screen name='Sakit' options={{ headerShown: false, statusBarColor: colorSecondary }} component={SakitScreen} />
            <Stack.Screen name='Send Cuti' options={{ headerShown: false, statusBarColor: colorNegative }} component={SendCutiScreen} />
            <Stack.Screen name='Send Sakit' options={{ headerShown: false, statusBarColor: colorNegative }} component={SendSakitScreen} />

            <Stack.Screen name='Notification' options={{ headerShown: false, statusBarColor: colorNegative }} component={NotificationScreen} />


        </Stack.Navigator>
    )
}

export default Route