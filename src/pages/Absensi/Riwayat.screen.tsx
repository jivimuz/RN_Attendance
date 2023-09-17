import { View, Text, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useState, useCallback, useContext, useEffect } from 'react';
// import MonthPicker from 'react-native-month-year-picker';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import { colorInfo, colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../Style/style';
import { BgPurple2, Dummy } from '../../../assets';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Divider } from 'react-native-paper';

const RiwayatScreen = ({ navigation }) => {

    return (
        <>
            <View style={{ backgroundColor: colorPrimary, height: 'auto' }}>
                <View style={mainStyle.header}>
                    <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 5 }}>
                        <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30, ...mainStyle.shadow, }} onPress={() => navigation.pop()}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ alignItems: 'flex-end', marginRight: 20, justifyContent: 'center' }} >
                            <Text style={[mainStyle.title, { fontWeight: 'bold', color: colorSecondary }]}>
                                Entis Sutisna
                            </Text>
                            <Text style={[mainStyle.caption, { fontWeight: 'bold', color: 'black' }]}>
                                41215303
                            </Text>
                        </View>
                        <Image source={Dummy} style={{ alignSelf: 'center', width: 70, height: 70, objectFit: 'cover', borderRadius: 50, borderColor: colorSecondary, borderWidth: 1, marginRight: 20, }} />
                    </View>
                </View>
                <Divider style={{ backgroundColor: colorNegative, marginHorizontal: 20 }} />
                <View style={{ margin: 10 }}>
                    <Text style={{ textAlign: 'center', color: colorNegative }}>From Agustus 2022 to September 2023</Text>
                    {/* <Button style={mainStyle.btn} variant="ghost" width={"100%"} fontWeight={'bold'} justifyContent={'center'} colorScheme={colorPrimary} bgColor={'white'} rightIcon={<FontAwesomeIcon icon={faCalendar} color='rgb(66, 103, 178)' />} onPress={() => showPicker(true)}>{tanggal}</Button>
                    {show && (
                        <MonthPicker
                            onChange={onValueChange}
                            value={date}
                            locale="id"
                            minimumDate={min}
                            maximumDate={max}
                            mode='full'
                        />
                    )} */}

                    <ImageBackground source={BgPurple2} style={{ marginTop: 10, height: 'auto', }} blurRadius={20} borderRadius={20}>
                        <View style={{ height: 'auto', flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: colorInfo, fontSize: 14 }}>Hadir</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}>1</Text>
                            </View>
                            <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: colorInfo, fontSize: 14 }}>Terlambat</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}>0</Text>
                            </View>
                            <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: colorInfo, fontSize: 14 }}>Pulang Cepat</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}>0</Text>
                            </View>
                        </View>
                        <View style={{ height: 'auto', flexDirection: 'row', padding: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: colorInfo, fontSize: 14 }}>Absen</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}>0</Text>
                            </View>
                            <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: colorInfo, fontSize: 14 }}>Izin</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}>5</Text>
                            </View>
                            <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', color: colorInfo, fontSize: 14 }}>Libur</Text>
                                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 25 }}>0</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

            </View >
            <>
                <TouchableOpacity style={[mainStyle.shadow, { backgroundColor: 'white', marginBottom: 5, height: 'auto', padding: 10 }]}>
                    <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', marginBottom: 5, width: '60%' }}>Tanggal Masuk:</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 14, color: 'black', marginBottom: 5, width: '40%', textAlign: 'center' }}>Status</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView style={{ marginTop: 5, marginHorizontal: 10 }}>


                    <TouchableOpacity style={[mainStyle.shadow, { backgroundColor: 'white', marginBottom: 5, height: 'auto', padding: 15 }]}>
                        <View style={{ flexDirection: 'row', marginLeft: 20 }}>
                            <Text style={{ fontSize: 12, color: 'black', marginBottom: 5, width: '60%' }}>2023-08-01</Text>
                            <Text style={{ fontSize: 12, color: 'blue', marginBottom: 5, width: '40%', textAlign: 'right' }}>Hadir &nbsp; &nbsp;</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView >
            </>
        </>
    )
}

export default RiwayatScreen