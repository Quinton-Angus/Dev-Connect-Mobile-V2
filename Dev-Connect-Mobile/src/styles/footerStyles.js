import { useContext } from "react";
import { ThemeContext } from "../app/_layout";
import { StyleSheet } from "react-native";

export default function footerStylesSheet() {

    const { colourScheme } = useContext(ThemeContext)

    return StyleSheet.create({
        footerContainer: {
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            padding: 25
        },

        footerWrapper: {
            gap: 40,
            flexDirection: "row"
        },

        footerLink: {
            fontFamily: "inter_light",
            fontSize: 12,
            color: colourScheme.secondary
        }
    })
}