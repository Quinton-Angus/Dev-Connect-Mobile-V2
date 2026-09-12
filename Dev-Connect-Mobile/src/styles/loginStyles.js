import { ThemeContext } from "../app/_layout";
import { StyleSheet } from "react-native";
import { useContext } from "react";

export default () => {
    const { colourScheme } = useContext(ThemeContext)

    return StyleSheet.create({
        
        loginContainer: {
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
            marginTop: 60,
        },

        loginWrapper: {
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "70%",
        },

        loginTitle: {
            fontFamily: "inter_bold",
            fontSize: 25,
            color: colourScheme.primary,
            marginBottom: 10
        },

        loginSubTitle: {
            fontFamily: "inter_light",
            fontSize: 10,
            color: colourScheme.primary,
            marginBottom: 50,
        },

        loginInputWrapper: {
            width: "100%"
        },

        inputText: {
            fontFamily: "inter_light",
            fontSize: 8,
            color: colourScheme.primary,
            position: "relative",
            top: 5,
            left: 20,
            backgroundColor: colourScheme.background,
            boxSizing: "border-box",
            paddingHorizontal: 10,
            zIndex: 1,
            alignSelf: "flex-start"
        },

        input: {
            width: "100%",
            height: 35,
            borderRadius: 5,
            borderColor: colourScheme.primary,
            borderWidth: 1,
            marginBottom: 15,
            color: colourScheme.primary,
            fontFamily: "inter_regular",
            fontSize: 8,
            paddingLeft: 10,
            boxSizing: "border-box"
        },

        loginBtn: {
            width: "100%",
            height: 30,
            backgroundColor: colourScheme.primary,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
        },

        loginBtnText: {
            fontFamily: "inter_medium",
            fontSize: 10,
            color: colourScheme.background,
        }


    })
}