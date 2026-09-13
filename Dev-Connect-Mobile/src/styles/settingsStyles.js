import { useContext } from "react";
import { ThemeContext } from "../app/_layout";
import { StyleSheet } from "react-native";

export default function settingStylesScript() {

    const { colourScheme } = useContext(ThemeContext)

    return StyleSheet.create({
        userContent: {
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 50,
            marginBottom: 20
        },

        profilePhoto: {
            width: 50,
            height: 50,
            borderRadius: 25,
            marginBottom: 25,
            borderWidth: 1,
            borderColor: colourScheme.primary
        },

        name: {
            fontFamily: "inter_bold",
            fontSize: 20,
            color: colourScheme.primary,
            marginBottom: 5
        },

        email: {
            fontFamily: "inter_regular",
            fontSize: 10,
            color: colourScheme.primary,
            marginBottom: 50
        },

        userContentDivider: {
            width: "90%",
            borderBottomWidth: 1,
            borderBottomColor: colourScheme.secondary
        },

        sectionContent: {
            width: "100%",
            paddingHorizontal: "5%",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            marginBottom: 25
        },

        contentTitle: {
            fontFamily: "inter_semi_bold",
            fontSize: 12,
            color: colourScheme.secondary,
            marginBottom: 25
        },

        accountInfoWrapper: {
            width: "80%"
        },

        accountInfoText: {
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

        accountInfoDetailWrapper: {
            width: "100%",
            height: 35,
            borderRadius: 5,
            borderColor: colourScheme.primary,
            borderWidth: 1,
            paddingLeft: 10,
            boxSizing: "border-box",
            justifyContent: "center",
            alignItems: "flex-start"
        },

        accountInfoDetailText: {
            color: colourScheme.primary,
            fontFamily: "inter_regular",
            fontSize: 8
        },

        toggles: {
            gap: 10,
            justifyContent: "flex-start",
            alignItems: "flex-start"
        },

        copyright: {
            fontFamily: "inter_light",
            fontSize:8,
            color: colourScheme.primary,
            marginBottom: 10,
            width: 200,
            lineHeight: 12
        },

        version: {
            fontFamily: "inter_regular",
            fontSize:8,
            color: colourScheme.primary
        },

        logoutBtn: {
            width: 60,
            height: 20,
            backgroundColor: colourScheme.primary,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 25
        },

        logoutText: {
            fontFamily: "inter_bold",
            fontSize: 8,
            color: colourScheme.background
        }
    })

}