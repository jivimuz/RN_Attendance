import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HariIni = ({ warna }) => {
    const currentDate = new Date();
    const days = [
        'Minggu',
        'Senin',
        'Selasa',
        'Rabu',
        'Kamis',
        'Jumat',
        'Sabtu',
    ];
    const months = [
        'Januari',
        'Februari',
        'Maret',
        'April',
        'Mei',
        'Juni',
        'Juli',
        'Agustus',
        'September',
        'Oktober',
        'November',
        'Desember',
    ];
    const day = days[currentDate.getDay()];
    const date = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    return (
        <Text style={{ color: warna }}>
            {day}, {date} {month} {year}
        </Text >
    );
};


export default HariIni;
