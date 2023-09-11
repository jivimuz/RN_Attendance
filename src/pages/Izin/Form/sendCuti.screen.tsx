import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { colorNegative, colorPrimary, colorSecondary, mainStyle } from '../../../Style/style'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Divider } from 'react-native-paper'
import { TextInput } from 'react-native-paper';

const SendCutiScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: colorNegative }}>
            <View style={mainStyle.header}>
                <View style={{ flexDirection: 'row', position: 'relative', marginBottom: 5 }}>
                    <TouchableOpacity style={{ alignSelf: 'center', backgroundColor: colorSecondary, padding: 15, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} onPress={() => navigation.pop()}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: colorPrimary, fontWeight: 'bold', marginRight: 20, fontSize: 35 }}> Send Cuti</Text>
            </View>
            <Divider style={{ marginHorizontal: 20 }} />
            <View style={{ marginHorizontal: 20, marginTop: 10 }}>
                <TextInput
                    label="Jenis Cuti"
                    mode='outlined'
                    style={{ backgroundColor: colorNegative }}
                    textColor='black'
                    outlineColor={colorSecondary}
                    activeOutlineColor={colorPrimary}
                    placeholderTextColor={colorSecondary}
                // value={}
                // onChangeText={text => setText(text)}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                    <TextInput
                        label="Dari"
                        mode='outlined'
                        style={{ backgroundColor: colorNegative, marginTop: 10, width: '49%' }}
                        textColor='black'
                        outlineColor={colorSecondary}
                        activeOutlineColor={colorPrimary}
                        placeholderTextColor={colorSecondary}
                    // value={}
                    // onChangeText={text => setText(text)}
                    />
                    <TextInput
                        label="Sampai"
                        mode='outlined'
                        style={{ backgroundColor: colorNegative, marginTop: 10, width: '49%' }}
                        textColor='black'
                        outlineColor={colorSecondary}
                        activeOutlineColor={colorPrimary}
                        placeholderTextColor={colorSecondary}
                    // value={}
                    // onChangeText={text => setText(text)}
                    />
                </View>
                <TextInput
                    multiline
                    label="Dari"
                    mode='outlined'
                    style={{ backgroundColor: colorNegative, marginTop: 10, height: 150 }}
                    textColor='black'
                    outlineColor={colorSecondary}
                    activeOutlineColor={colorPrimary}
                    placeholderTextColor={colorSecondary}
                // value={}
                // onChangeText={text => setText(text)}
                />

                <TouchableOpacity style={{ backgroundColor: colorPrimary, marginTop: 30, padding: 10, borderRadius: 30, ...mainStyle.shadow }} onPress={() => navigation.replace('Home')}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SendCutiScreen