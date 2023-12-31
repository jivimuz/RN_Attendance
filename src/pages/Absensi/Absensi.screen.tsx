import { View, Image, TouchableOpacity, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colorDanger, colorNegative, colorPrimary, colorSecondary, colorSecondary2, colorSuccess, mainStyle } from '../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronLeft, faClock, faBusinessTime } from '@fortawesome/free-solid-svg-icons';
import { Dummy } from '../../../assets';
import { TglHariIni } from '../../Func/Hariini';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const AbsensiScreen = ({ navigation }) => {
    const [duration, setDuration] = useState(0);
    const [initialRemainingTime, setInitialRemainingTime] = useState(0);
    const [isPlay, setIsplay] = useState(false);

    const hitungDurasi = (jamDatang, jamPulang) => {
        const datang = parseInt(jamDatang.split(':')[0], 10) * 3600 + parseInt(jamDatang.split(':')[1], 10) * 60;
        const pulang = parseInt(jamPulang.split(':')[0], 10) * 3600 + parseInt(jamPulang.split(':')[1], 10) * 60;

        const waktuSekarang = new Date();
        const jamSekarang = (waktuSekarang.getHours() * 3600) + (waktuSekarang.getMinutes() * 60) + waktuSekarang.getSeconds();

        const initialRemaining = jamSekarang > pulang ? 0 : pulang - jamSekarang;

        setDuration(Number(pulang - datang));
        setInitialRemainingTime(Number(initialRemaining));
        setIsplay(true)
    };


    useEffect(() => {
        hitungDurasi("08:30", "17:00");
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: colorNegative }}>
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
                        <FontAwesomeIcon icon={faClock} size={35} color={colorNegative} />
                        <Text style={{ color: colorNegative, marginTop: 10 }}>Waktu Hadir</Text>
                        <Text style={{ color: colorNegative, ...mainStyle.title }}>08:30</Text>
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
                        <Text style={[mainStyle.titleSection2, { color: 'grey', marginTop: 0 }]}>08:00 - 17:00</Text>
                        <Text style={[mainStyle.textSmall, { marginTop: -10 }]}>Senin - Rabu</Text>
                    </View>
                    <View style={[mainStyle.scheduleContainer2, { margin: 10 }]}>
                        <FontAwesomeIcon icon={faBusinessTime} size={24} color={'grey'} />
                        <Text style={[mainStyle.titleSection2, { color: 'grey', marginTop: 0 }]}>09:00 - 17:00</Text>
                        <Text style={[mainStyle.textSmall, { marginTop: -10 }]}>Kamis</Text>
                    </View>
                    <View style={[mainStyle.scheduleContainer2, { margin: 10 }]}>
                        <FontAwesomeIcon icon={faBusinessTime} size={24} color={'grey'} />
                        <Text style={[mainStyle.titleSection2, { color: 'grey', marginTop: 0 }]}>08:00 - 13:00</Text>
                        <Text style={[mainStyle.textSmall, { marginTop: -10 }]}>Jumat</Text>
                    </View>

                </ScrollView>
            </View>

            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', fontSize: 20 }}>Menuju Waktu Pulang</Text>
                <TouchableOpacity style={{ backgroundColor: colorNegative, borderRadius: 125, marginTop: 20, ...mainStyle.shadow }}>
                    <CountdownCircleTimer
                        isPlaying={isPlay}
                        duration={initialRemainingTime}
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