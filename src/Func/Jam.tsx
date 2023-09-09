import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Jam = ({ warna }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        // Fungsi untuk memperbarui waktu setiap detik
        const updateTime = () => {
            setTime(new Date());
        };

        // Mulai interval untuk memperbarui waktu setiap detik (1000ms)
        const intervalId = setInterval(updateTime, 1000);

        // Bersihkan interval saat komponen dilepas
        return () => clearInterval(intervalId);
    }, []);

    // Format waktu menjadi jam dan menit
    const hours = time.getHours().toString().padStart(2, '0');
    const minutes = time.getMinutes().toString().padStart(2, '0');

    return (
        <Text style={{ color: warna, textAlign: 'right' }}>{hours}:{minutes}</Text>
    );
};


export default Jam;
