import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { colorPrimary, colorSecondary, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Dummy } from '../../../assets'
import { Divider } from 'react-native-paper'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'

const CutiScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorSecondary }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 5 }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: 'white', padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
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
            <View style={{ marginTop: 10 }} >
                <Text style={[mainStyle.titleSection, { color: 'black' }]}>
                    Leave History This Month
                </Text>
                <Text style={[mainStyle.subTitle, { color: 'grey', marginHorizontal: 20, marginTop: -5 }]}>
                    Riwayat Cuti Bulan Ini
                </Text>
            </View>
            <Divider style={{ margin: 10 }} />
            <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, paddingVertical: 10, flex: 1, backgroundColor: 'white' }}>
                {Array.from({ length: 15 }).map((_, i) => (
                    <View key={i}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ color: colorPrimary, fontWeight: 'bold' }}>2023-07-04</Text>
                            <Text style={{ color: 'orange' }}>Menunggu</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 5 }}>
                            <Text style={{ color: 'black', }}>Cuti Tahunan</Text>
                            <Text style={{ color: colorPrimary }}>1 Hari</Text>
                        </View>
                        <Divider style={{ marginTop: 10 }} />
                    </View>

                ))}
                <View style={{ height: 50 }} />
            </ScrollView>

            <TouchableOpacity style={mainStyle.fabMain} onPress={() => navigation.push('Send Cuti')}>
                <View style={[mainStyle.fabIcon]}>
                    <FontAwesomeIcon icon={faPaperPlane} size={25} color='white' />
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CutiScreen