import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native'
import React from 'react'
import { colorDanger, colorPrimary, colorSecondary, colorSecondary2, colorSuccess, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faClock, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { Dummy } from '../../../assets';
import { TglHariIni } from '../../Func/Hariini';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const AbsensiScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 5 }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30, ...mainStyle.shadow, }} onPress={() => navigation.pop()}>
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

            <View style={{ marginHorizontal: 20 }}>
                <View style={{ alignItems: 'flex-end' }}>
                    <TglHariIni warna='grey' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
                    <View style={{ backgroundColor: colorSuccess, width: '49%', height: 'auto', borderRadius: 20, padding: 10, alignItems: 'center' }} >
                        <FontAwesomeIcon icon={faClock} size={35} color={'white'} />
                        <Text style={{ color: 'white', marginTop: 10 }}>Waktu Hadir</Text>
                        <Text style={{ color: 'white', ...mainStyle.title }}>08:30</Text>
                    </View>
                    <View style={{ backgroundColor: '#E0E0E0', width: '49%', height: 'auto', borderRadius: 20, padding: 10, alignItems: 'center' }} >
                        <FontAwesomeIcon icon={faClock} size={35} color={'grey'} />
                        <Text style={{ color: 'grey', marginTop: 10 }}>Waktu Pulang</Text>
                        <Text style={{ color: 'grey', ...mainStyle.title }}>--:--</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 10 }} >
                <Text style={[mainStyle.titleSection, { color: 'black' }]}>
                    Timetable
                </Text>
                <Text style={[mainStyle.subTitle, { color: 'grey', marginHorizontal: 20, marginTop: -5 }]}>
                    Jadwal
                </Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 20, flexDirection: 'row', marginTop: 10 }}>
                    <View style={[mainStyle.scheduleContainer2, { margin: 10 }]}>
                        <FontAwesomeIcon icon={faBusinessTime} size={24} color={'grey'} />
                        <Text style={[mainStyle.titleSection, { color: 'grey', marginTop: 0 }]}>08:00 - 17:00</Text>
                        <Text style={[mainStyle.textSmall, { marginTop: -10 }]}>Senin - Rabu</Text>
                    </View>
                    <View style={[mainStyle.scheduleContainer2, { margin: 10 }]}>
                        <FontAwesomeIcon icon={faBusinessTime} size={24} color={'grey'} />
                        <Text style={[mainStyle.titleSection, { color: 'grey', marginTop: 0 }]}>09:00 - 17:00</Text>
                        <Text style={[mainStyle.textSmall, { marginTop: -10 }]}>Kamis</Text>
                    </View>
                    <View style={[mainStyle.scheduleContainer2, { margin: 10 }]}>
                        <FontAwesomeIcon icon={faBusinessTime} size={24} color={'grey'} />
                        <Text style={[mainStyle.titleSection, { color: 'grey', marginTop: 0 }]}>08:00 - 13:00</Text>
                        <Text style={[mainStyle.textSmall, { marginTop: -10 }]}>Jumat</Text>
                    </View>

                </ScrollView>
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 20 }}>Menuju Waktu Pulang</Text>
                <TouchableOpacity style={{ backgroundColor: 'white', borderRadius: 125, marginTop: 20, ...mainStyle.shadow }}>
                    <CountdownCircleTimer
                        isPlaying
                        duration={3000}
                        initialRemainingTime={2500}
                        colors={colorSecondary}
                        strokeWidth={10}
                        trailStrokeWidth={10}
                        size={250}
                    >
                        {({ remainingTime }) => {
                            const hours = Math.floor(remainingTime / 3600)
                            const minutes = Math.floor((remainingTime % 3600) / 60)
                            const seconds = remainingTime % 60
                            return (
                                <>
                                    <FontAwesomeIcon icon={faClock} size={30} color={colorPrimary} />
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 30 }}>{hours}</Text>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 10 }}>Jam</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 30 }}> : </Text>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 10 }}></Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 30 }}>{minutes}</Text>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 10 }}>Menit</Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 30 }}> : </Text>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 10 }}></Text>
                                        </View>
                                        <View style={{ alignItems: 'center' }}>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 30 }}>{seconds}</Text>
                                            <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 10 }}>Detik</Text>
                                        </View>
                                    </View>
                                    <Text style={{ color: colorDanger, fontWeight: 'bold', fontSize: 15, marginTop: 20 }}>Klik Untuk Absensi</Text>
                                </>
                            )
                        }}
                    </CountdownCircleTimer>
                </TouchableOpacity>
            </View>


        </View >
    )
}

export default AbsensiScreen