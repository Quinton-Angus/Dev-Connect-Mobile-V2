import { ThemeContext } from "../app/_layout";
import { useContext } from "react";
import { StyleSheet } from "react-native";

export default function headerStylesSheet() {

    const { colourScheme } =  useContext(ThemeContext)

    return StyleSheet.create({

        headerWrapper: {
            boxSizing: "border-box",
            padding: 25,
            backgroundColor: colourScheme.background,
            justifyContent: "space-between",
            alignItems: "center",
            height: 75,
            width: "100%",
            flexDirection: "row"
        },

        title: {
            fontSize: 12,
            fontFamily: "inter_regular",
            color: colourScheme.primary
        },

        btnWrapper: {
            height: 15,
            width: 15,
            backgroundColor: colourScheme.background
        },

        btn: {
            flex: 1
        },

        btnIcon: {
            width: 15,
            height: 15
        }

    })

}