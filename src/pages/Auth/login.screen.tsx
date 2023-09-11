import { View, Text, StatusBar, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary2, mainStyle, themeColors } from '../../Style/style'
import { Login } from '../../../assets'

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: themeColors }}>
            <View style={{ padding: 40, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={Login} style={{ width: 200, height: 200, objectFit: 'contain' }} />
            </View>
            <View style={{ flex: 1, backgroundColor: colorNegative, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                <View style={{ padding: 40 }}>

                    <Text style={{ color: 'grey', fontWeight: 'bold' }}>Username / Email:</Text>
                    <TextInput inputMode='text' style={{ backgroundColor: colorSecondary2, borderRadius: 10, color: 'black', padding: 10, marginTop: 5 }} />

                    <Text style={{ color: 'grey', fontWeight: 'bold', marginTop: 15 }}>Password:</Text>
                    <TextInput inputMode='text' secureTextEntry={true} style={{ backgroundColor: colorSecondary2, borderRadius: 10, color: 'black', padding: 10, marginTop: 5 }} />
                    <TouchableOpacity style={{ alignItems: 'flex-end', marginTop: 20 }}>
                        <Text style={{ color: 'grey', fontWeight: 'bold', }}>Lupa Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ backgroundColor: colorPrimary, marginTop: 30, padding: 10, borderRadius: 30, ...mainStyle.shadow }} onPress={() => navigation.replace('Home')}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}

export default LoginScreen