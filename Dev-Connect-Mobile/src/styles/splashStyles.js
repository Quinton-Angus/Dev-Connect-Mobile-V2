import { StyleSheet } from "react-native";

export default StyleSheet.create({

    safeAreaView: {
        flex: 1,
        backgroundColor: "#080808"
    },

    splash_screen: {
        flex: 1,
        backgroundColor: "#080808"
    },

    screen: {
        flex: 1,
        backgroundColor: "#080808",
        justifyContent: "center",
        alignItems: "center"
    },

    splash_icon: {
        width: 50,
        height: 75
    },

    logo_container: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    spinner_container: {
        position: "absolute",
        bottom: 50,
        left: 0,
        right: 0,
        alignItems: "center",
        justifyContent: "center"
    },

    spinner: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: "#121212",
        borderRadius: 25,
        borderTopColor: "#FFFFFF"
    }
})