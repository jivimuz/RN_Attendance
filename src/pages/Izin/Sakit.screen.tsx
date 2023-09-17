import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft, faHospitalUser } from '@fortawesome/free-solid-svg-icons'
import { Dummy } from '../../../assets'
import { Divider } from 'react-native-paper'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const SakitScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorSecondary }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 5 }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorNegative, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>

                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ alignItems: 'flex-end', marginRight: 20, justifyContent: 'center' }} >
                        <Text style={[mainStyle.title, { fontWeight: 'bold', color: colorPrimary }]}>
                            Entis Sutisna
                        </Text>
                        <Text style={[mainStyle.caption, { fontWeight: 'bold', color: 'black' }]}>
                            41215303
                        </Text>
                    </View>
                    <Image source={Dummy} style={{ alignSelf: 'center', width: 70, height: 70, objectFit: 'cover', borderRadius: 50, borderColor: colorSecondary, borderWidth: 1, marginRight: 20, }} />
                </View>
            </View>
            <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} >
                <FontAwesomeIcon icon={faHospitalUser} style={{ marginLeft: 20 }} size={55} />
                <View>
                    <Text style={[mainStyle.titleSection, { color: 'black' }]}>
                        Sick History This Month
                    </Text>
                    <Text style={[mainStyle.subTitle, { color: colorPrimary, marginLeft: 20, marginTop: -10 }]}>
                        Riwayat Sakit Bulan Ini
                    </Text>
                </View>
            </View>
            <Divider style={{ margin: 10 }} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, paddingVertical: 10, flex: 1, backgroundColor: colorNegative, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                {Array.from({ length: 3 }).map((_, i) => (
                    <View key={i}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: colorPrimary, fontWeight: 'bold' }}>2023-07-04</Text>
                            <Text style={{ color: 'orange' }}>Menunggu</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                            <Text style={{ color: 'black', }}>Sakit</Text>
                            <Text style={{ color: colorPrimary }}>1 Hari</Text>
                        </View>
                        <Divider style={{ marginTop: 10 }} />
                    </View>

                ))}
                <View style={{ height: 50 }} />
            </ScrollView>

            <TouchableOpacity style={mainStyle.fabMain} onPress={() => navigation.push('Send Sakit')}>
                <View style={[mainStyle.fabIcon]}>
                    <FontAwesomeIcon icon={faPaperPlane} size={25} color={colorNegative} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default SakitScreen