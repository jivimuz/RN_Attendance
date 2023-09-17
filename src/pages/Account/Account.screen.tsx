import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faKey, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Dummy } from '../../../assets'
import { Divider } from 'react-native-paper'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

const AccountScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorNegative }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 5 }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>

            </View>
            <View style={{ justifyContent: 'center' }}>
                <Image source={Dummy} style={{ alignSelf: 'center', width: 120, height: 120, objectFit: 'cover', borderRadius: 60, borderColor: colorSecondary, borderWidth: 1, marginRight: 20, }} />
                <View style={{ alignItems: 'center', marginRight: 20, justifyContent: 'center' }} >
                    <Text style={[mainStyle.title, { fontWeight: 'bold', color: colorPrimary, marginTop: 5 }]}>
                        Entis Sutisna
                    </Text>
                    <Text style={[mainStyle.caption, { fontWeight: 'bold', color: 'black', marginTop: 5 }]}>
                        41215303
                    </Text>
                </View>
            </View>
            <Divider style={{ margin: 20 }} />
            <View style={{ flex: 1, backgroundColor: colorPrimary, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingHorizontal: 20, paddingTop: 10 }}>

                <TouchableOpacity style={[mainStyle.shadow, { height: 50, paddingHorizontal: 20, marginTop: 10, backgroundColor: colorSecondary, paddingVertical: 10, borderRadius: 20 }]} onPress={() => navigation.push('Password')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faKey} size={30} color={'brown'} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Ganti Password</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >

                <TouchableOpacity style={[mainStyle.shadow, { height: 50, paddingHorizontal: 20, marginTop: 10, backgroundColor: colorSecondary, paddingVertical: 10, borderRadius: 20 }]} onPress={() => navigation.push('Credentials')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faCopyright} size={30} color={'orange'} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Credentials</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >

                <TouchableOpacity style={[mainStyle.shadow, { height: 50, paddingHorizontal: 20, marginTop: 10, backgroundColor: colorSecondary, paddingVertical: 10, borderRadius: 20 }]}
                    onPress={() => navigation.replace('Login')}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ borderRadius: 30, width: '50%', flexDirection: 'row', alignItems: 'center' }}>
                            <FontAwesomeIcon icon={faRightFromBracket} size={30} color={'red'} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Log Out</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >
            </View>
        </View >
    )
}

export default AccountScreen