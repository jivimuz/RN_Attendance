import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colorPrimary, mainStyle, themeColors } from '../Style/style'
import { Welcome } from '../../assets'

const SplashScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: themeColors }}>
            <StatusBar backgroundColor={themeColors} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>Selamat Datang</Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Welcome} style={{ width: 300, height: 300, objectFit: 'contain' }} />
            </View>
            <View style={{ flex: 1, margin: 20 }}>
                <TouchableOpacity onPress={() => navigation.push('Login')} style={{ backgroundColor: colorPrimary, marginTop: 120, padding: 10, borderRadius: 30, ...mainStyle.shadow }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Let's Go</Text>
                </TouchableOpacity>
                {/* <View style={{ marginTop: 15, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity>
                        <Text style={{ color: 'black', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>Lupa Password? </Text>
                    </TouchableOpacity>
                </View> */}
            </View>
        </SafeAreaView>
    )
}

export default SplashScreen