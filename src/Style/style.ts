
import { StyleSheet } from "react-native";

export const themeColors = 'rgb(142, 12, 175)'

export const colorPrimary = 'rgb(142, 12, 175)'
export const colorSecondary = 'rgb(243, 198, 255)'
export const colorSecondary2 = 'rgb(250, 226, 255)'
export const colorDanger = 'rgb(203, 20, 20)'
export const colorSuccess = 'rgb(12, 152, 45)'
export const colorWarning = 'rgb(255, 180, 51)'

export const mainStyle = StyleSheet.create({
    contentCenter: {
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: colorPrimary,
    },
    content: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        backgroundColor: colorPrimary,
    },
    view: {
        width: "80%"
    },
    itemCenter: {
        alignItems: "center",
    },
    title: {
        fontWeight: 'bold',
        fontSize: 23
    },
    titleSection: {
        marginHorizontal: 20,
        marginVertical: 10,
        fontWeight: "bold",
        fontSize: 18
    },
    cardTitle: {
        color: colorPrimary,
        fontWeight: 'bold'
    },
    btn: {
        marginTop: 5,
        marginBottom: 5
    },
    bgPrimary: {
        backgroundColor: colorPrimary,
    },
    bgWarning: {
        backgroundColor: "orange",
    },
    bgInfo: {
        backgroundColor: "rgb(91, 144, 249)",
    },
    bgSuccess: {
        backgroundColor: "green",
    },
    bgDanger: {
        backgroundColor: "red",
    },
    bgLight: {
        backgroundColor: "white",
        color: 'rgb(66, 103, 178)',
    },
    AlertWarning: {
        backgroundColor: "rgb(166, 169, 255)",
        borderRadius: 10,
        padding: 10,
        color: 'white'
    },
    textPrimary: {
        color: colorPrimary,
    },
    textWhite: {
        color: 'white',
    },
    textWarning: {
        color: "orange",
    },
    textDanger: {
        color: "Red",
    },
    textSuccess: {
        color: "green",
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    shadowTop: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 2,
            height: -10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        zIndex: 1,
    },
    inputContainer: {
        width: '100%',
        backgroundColor: 'white',
        borderRadius: 10,
        position: 'absolute',
        flexDirection: 'row',
        paddingHorizontal: 5,
        alignItems: 'center',
    },
    categoryContainer: {
        marginTop: 50,
        marginHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    scheduleContainer: {
        height: 80,
        width: 170,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    scheduleContainer2: {
        height: 80,
        width: 170,
        backgroundColor: '#E0E0E0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    iconContainer: {
        height: 80,
        width: 80,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    iconContainer2: {
        height: 80,
        width: 80,
        backgroundColor: colorPrimary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    iconBigContainer: {
        marginHorizontal: 20,
        height: 120,
        width: 120,
        backgroundColor: colorSecondary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    box: {
        padding: 20,
        borderRadius: 15,
        width: '100%',
    },
    textSmall: {
        fontSize: 10,
        color: 'black',
    },
    textSmallWhite: {
        fontSize: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    textBig: {
        marginTop: 5,
        fontSize: 13,
        color: colorPrimary
    },
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuWrapper: {
        marginTop: 10,
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    },
    avatarLight: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colorSecondary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    topHeader: {
        paddingVertical: 5,
        backgroundColor: colorPrimary
    },
    header: {
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    mapView: {
        height: 500,
        borderRadius: 30,
    },
    mapContainer: {
        marginHorizontal: 70,
        marginVertical: 20,
        height: 60,
        backgroundColor: 'white',
        borderRadius: 10,
        top: 450,
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    subTitle: {
        fontWeight: 'bold', fontSize: 15, marginTop: 20, color: colorPrimary
    },
    subCaption: {
        fontSize: 15
    },
    camera: {
        height: '50%',
        maxHeight: '50%'
    },
    bound: ({ width, height, x, y }) => {
        return {
            position: 'abolute',
            top: y,
            left: x,
            height,
            width,
            borderWidth: 5,
            borderColor: 'green',
            zIndex: 3000,
        }
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: ({ width, height, color }) => {
        return {
            height: height,
            width: width,
            borderRadius: 40,
            flex: 0,
            backgroundColor: color,
            padding: 15,
            paddingHorizontal: 20,
            alignSelf: 'center',
            shadowColor: 'black',
            shadowOpacity: 1,
            shadowRadius: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    buttonCuti: {
        width: 180,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 200,
        marginTop: 20,
        borderRadius: 20,
    },
    textSign: {
        marginHorizontal: 10,
        fontWeight: 'bold',
        fontSize: 15
    },
    textSignBanner: {
        marginHorizontal: 10,
        marginTop: -5,
        fontWeight: 'bold',
        fontSize: 30
    },
    fabMain: {
        bottom: 50,
        height: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    fabIcon: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colorPrimary,
        borderRadius: 50

    }

})

