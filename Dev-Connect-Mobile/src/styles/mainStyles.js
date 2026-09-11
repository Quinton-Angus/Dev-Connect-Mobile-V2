import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../app/_layout";

export default function useMainStyles() {

    const { colourScheme } = useContext(ThemeContext)

    return StyleSheet.create({
        safeAreaView: {
            flex: 1,
            backgroundColor: colourScheme.backgroundColor
        },

        screen: {
            flex: 1,
            backgroundColor: colourScheme.backgroundColor,
            justifyContent: "center",
            alignItems: "center"
        }
    })

}