import { View, Text, TouchableOpacity, Linking, ScrollView } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const CredentialSreen = ({ navigation }) => {
    return (
        <ScrollView style={{ flex: 1, backgroundColor: colorNegative }} >
            <View style={{ backgroundColor: colorPrimary }}>
                <View style={mainStyle.header}>
                    <View style={{ flexDirection: 'row', position: 'relative' }}>
                        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorNegative, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ color: colorNegative, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Credential</Text>
                </View>
                <View style={{ borderBottomWidth: 1, padding: 20, borderBottomColor: 'grey' }}>
                    <Text style={{ fontSize: 12, color: colorNegative }}>This application is Copyright Jivi Muzaqi Guntur @ All right reserved</Text>
                    <Text style={{ fontSize: 12, color: colorNegative }}>Developed in Indonesia.</Text>
                </View>
            </View>
            <View style={{ padding: 20 }}>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>React Native</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://reactnative.dev/')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://reactnative.dev</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>React Native Paper</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://callstack.github.io/react-native-paper/')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://callstack.github.io/react-native-paper</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>Origin Font Awesome</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://origin.fontawesome.com')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://origin.fontawesome.com</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>Native Base</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://docs.nativebase.io/')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://docs.nativebase.io/</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary }]}>React Navigation</Text>
                    <TouchableOpacity onPress={() => Linking.openURL('https://reactnavigation.org/')}>
                        <Text style={[mainStyle.subCaption, { color: 'blue', fontSize: 12 }]}>https://reactnavigation.org/</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView >
    )
}

export default CredentialSreen