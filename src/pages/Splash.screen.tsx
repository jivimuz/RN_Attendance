import { View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native'
import React from 'react'
import { colorPrimary, colorSecondary, mainStyle, themeColors } from '../Style/style'
import { BgPurple3, Welcome } from '../../assets'

const SplashScreen = ({ navigation }) => {
    return (
        <ImageBackground source={BgPurple3} style={{ flex: 1, backgroundColor: colorSecondary }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: themeColors, fontWeight: 'bold', fontSize: 25 }}>Selamat Datang</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Welcome} style={{ width: 300, height: 300, objectFit: 'contain' }} />
            </View>
            <View style={{ flex: 1, margin: 20 }}>
                <TouchableOpacity onPress={() => navigation.replace('Login')} style={{ backgroundColor: colorPrimary, marginTop: 120, padding: 10, borderRadius: 30, ...mainStyle.shadow }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Let's Go</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default SplashScreen