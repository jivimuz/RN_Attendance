import { View, Text, ScrollView, ImageBackground, TouchableOpacity, RefreshControl, Image } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, colorSecondary2, mainStyle } from '../../Style/style';
import Jam from '../../Func/Jam';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { BgPurple, Cepat, Cuti, Dummy, Hadir, Terlambat } from '../../../assets';
import { Divider, Badge } from 'react-native-paper';
import { HariIni } from '../../Func/Hariini';
// import { faBusinessTime, faUserClock, faUserInjured, faBell } from '@fortawesome/free-brands-svg-icons';
import { faBusinessTime, faUserClock, faUserInjured, faBell } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = ({ navigation }) => {
    const onRefresh = () => {
        navigation.replace('Home')
    };

    return (
        <>
            <ScrollView refreshControl={<RefreshControl onRefresh={onRefresh} />} showsVerticalScrollIndicator={false}>
                <ImageBackground source={BgPurple} >
                    <View style={mainStyle.header}>
                        <TouchableOpacity style={{ flexDirection: 'row', marginLeft: 20, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.push('Account')}>
                            <Image source={Dummy} style={{ alignSelf: 'center', width: 50, height: 50, objectFit: 'cover', borderRadius: 50, borderWidth: 1, borderColor: colorPrimary }} />
                            <View style={{ marginLeft: 10 }}>
                                <Text style={{ fontWeight: "bold", fontSize: 18, color: colorPrimary }}>Entis Sutisna</Text>
                                <Text style={{ fontWeight: "bold", fontSize: 12, color: 'black' }}>41215303</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', position: 'relative', marginRight: 20 }}>
                            <TouchableOpacity style={{ alignSelf: 'center', marginBottom: 10 }} onPress={() => navigation.push('Notification')}>
                                <FontAwesomeIcon icon={faBell} size={28} color={colorNegative} />
                                <Badge style={{ marginTop: -30 }}>3</Badge>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{ height: 150 }}>
                        <View style={{
                            minHeight: 120, paddingHorizontal: 20,
                        }}>
                            <View>
                                <View style={[mainStyle.inputContainer, mainStyle.shadow]}>
                                    <View style={[mainStyle.box]} >
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <View style={{ width: '70%' }}>
                                                <HariIni warna={'grey'} />
                                            </View>
                                            <View style={{ width: '30%' }}>
                                                <Jam warna={'grey'} />
                                            </View>
                                        </View>
                                        <Divider style={{ marginTop: 10 }} />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                                            {/*  Hadir */}
                                            <View style={{ width: '45%', flexDirection: 'row' }}>
                                                <View style={{ width: 50, height: 50, backgroundColor: colorSecondary2, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                                    <FontAwesomeIcon icon={faCircleCheck} color={colorPrimary} />
                                                </View>
                                                <View>
                                                    <Text style={{ color: colorPrimary, ...mainStyle.textSign }}>Hadir</Text>
                                                    <Text style={{ color: colorPrimary, ...mainStyle.textSignBanner }}>08:30</Text>
                                                </View>
                                            </View>
                                            {/* Pulang */}
                                            <View style={{ width: '10%' }} />
                                            <View style={{ width: '45%', flexDirection: 'row' }}>
                                                <View style={{ width: 50, height: 50, backgroundColor: colorSecondary2, alignItems: 'center', justifyContent: 'center', borderRadius: 20 }}>
                                                    <FontAwesomeIcon icon={faCircleCheck} color={colorSecondary} />
                                                </View>
                                                <View>
                                                    <Text style={{ color: colorSecondary, ...mainStyle.textSign }}>Pulang</Text>
                                                    <Text style={{ color: colorSecondary, ...mainStyle.textSignBanner }}>--:--</Text>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={{ marginTop: 20 }}>
                                            <TouchableOpacity style={{ backgroundColor: 'gold', padding: 10, borderRadius: 30, ...mainStyle.shadow }} onPress={() => navigation.push('Absensi')}>
                                                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: colorNegative }}>Absensi</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ marginTop: 60 }} >
                    <Text style={[mainStyle.titleSection, { color: 'black' }]}>
                        Timetable
                    </Text>
                    <Text style={[mainStyle.subTitle, { color: 'grey', marginHorizontal: 20, marginTop: -5 }]}>
                        Jadwal
                    </Text>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{ marginHorizontal: 20, flexDirection: 'row', marginTop: 10 }}>
                        <View style={[mainStyle.scheduleContainer, { margin: 10 }]}>
                            <FontAwesomeIcon icon={faBusinessTime} size={24} color={colorPrimary} />
                            <Text style={[mainStyle.titleSection, { color: colorPrimary, marginTop: 0 }]}>08:00 - 17:00</Text>
                            <Text style={[mainStyle.textSmall, { marginTop: -10 }]}>Senin - Rabu</Text>
                        </View>
                        <View style={[mainStyle.scheduleContainer, { margin: 10 }]}>
                            <FontAwesomeIcon icon={faBusinessTime} size={24} color={colorPrimary} />
                            <Text style={[mainStyle.titleSection, { color: colorPrimary, marginTop: 0 }]}>09:00 - 17:00</Text>
                            <Text style={[mainStyle.textSmall, { marginTop: -10 }]}>Kamis</Text>
                        </View>
                        <View style={[mainStyle.scheduleContainer, { margin: 10 }]}>
                            <FontAwesomeIcon icon={faBusinessTime} size={24} color={colorPrimary} />
                            <Text style={[mainStyle.titleSection, { color: colorPrimary, marginTop: 0 }]}>08:00 - 13:00</Text>
                            <Text style={[mainStyle.textSmall, { marginTop: -10 }]}>Jumat</Text>
                        </View>

                    </ScrollView>
                </View>
                <View>
                    <Text style={[mainStyle.titleSection, { color: 'black' }]}>
                        This Month Summary
                    </Text>
                    <Text style={[mainStyle.subTitle, { color: 'grey', marginHorizontal: 20, marginTop: -5 }]}>
                        Rekap Bulan Ini
                    </Text>
                    <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                        <View style={[mainStyle.iconContainer, mainStyle.shadow, { marginBottom: 10 }]}>
                            <View style={{ width: 50, height: 50 }}>
                                <Image source={Hadir} style={{ width: 50, height: 50 }} />
                                <Badge style={{ marginLeft: -10, marginTop: -50, backgroundColor: 'green', color: colorNegative }}>23</Badge>
                            </View>
                            <Text style={mainStyle.textSmall}>Hadir</Text>
                        </View>

                        <View style={[mainStyle.iconContainer, mainStyle.shadow, { marginBottom: 10 }]}>
                            <View style={{ width: 50, height: 50 }}>
                                <Image source={Cuti} style={{ width: 50, height: 50 }} />
                                <Badge style={{ marginLeft: -10, marginTop: -50, backgroundColor: 'red', color: colorNegative }}>1</Badge>
                            </View>
                            <Text style={mainStyle.textSmall}>Absen</Text>
                        </View>

                        <View style={[mainStyle.iconContainer, mainStyle.shadow, { marginBottom: 10 }]}>
                            <View style={{ width: 50, height: 50 }}>
                                <Image source={Terlambat} style={{ width: 50, height: 50 }} />
                                <Badge style={{ marginLeft: -10, marginTop: -50, backgroundColor: 'orange', color: colorNegative }}>2</Badge>
                            </View>
                            <Text style={mainStyle.textSmall}>Terlambat</Text>
                        </View>

                        <View style={[mainStyle.iconContainer, mainStyle.shadow, { marginBottom: 10 }]}>
                            <View style={{ width: 50, height: 50 }}>
                                <Image source={Cepat} style={{ width: 50, height: 50 }} />
                                <Badge style={{ marginLeft: -10, marginTop: -50, backgroundColor: 'orange', color: colorNegative }}>4</Badge>
                            </View>
                            <Text style={mainStyle.textSmall}>Pulang Cepat</Text>
                        </View>

                    </View>
                </View>
                <View >
                    <Text style={[mainStyle.titleSection, { color: 'black' }]}>
                        Permit
                    </Text>
                    <Text style={[mainStyle.subTitle, { color: 'grey', marginHorizontal: 20, marginTop: -5 }]}>
                        Izin
                    </Text>
                    <View style={{ marginHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                        <TouchableOpacity style={[mainStyle.iconContainer2, mainStyle.shadow, { marginBottom: 10 }]} onPress={() => navigation.push('Cuti')}>
                            <FontAwesomeIcon icon={faUserClock} size={35} color={colorNegative} style={{ margin: 5 }} />
                            <Text style={mainStyle.textSmallWhite}>Cuti</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={[mainStyle.iconContainer2, mainStyle.shadow, { marginBottom: 10 }]} onPress={() => navigation.push('Sakit')}>
                            <FontAwesomeIcon icon={faUserInjured} size={35} color={colorNegative} style={{ margin: 5 }} />
                            <Text style={mainStyle.textSmallWhite}>Sakit</Text>
                        </TouchableOpacity>

                        <View style={[mainStyle.shadow, {
                            marginBottom: 10, height: 80, width: 160, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center', borderRadius: 10,
                        }]}>
                            <Text style={{ fontSize: 35, color: colorPrimary, fontWeight: 'bold' }} >3</Text>
                            <Text style={mainStyle.textSmall}>Jumlah Izin</Text>
                        </View>

                    </View>
                </View>
            </ScrollView >
        </>

    )
}

export default HomeScreen