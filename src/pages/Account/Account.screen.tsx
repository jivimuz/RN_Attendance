import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Dummy } from '../../../assets'
import { Divider } from 'react-native-paper'

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
            <View style={{ flex: 1, backgroundColor: colorPrimary, borderTopLeftRadius: 30, borderTopRightRadius: 30, paddingHorizontal: 20 }}>

            </View>
        </View >
    )
}

export default AccountScreen