import { useContext } from "react";
import { ThemeContext } from "../app/_layout";
import { StyleSheet } from "react-native";

export default () => {

    const { colourScheme } = useContext(ThemeContext)

    return StyleSheet.create({

        toggleContainer: {
            gap: 10,
            flexDirection: "row"
        },

        toggleWrapper: {
            width: 24,
            height: 12,
            backgroundColor: colourScheme.tertiary,
            borderRadius: 6,
            padding: 3,
            boxSizing: "border-box",
            justifyContent:"flex-start",
            alignItems: "flex-start"
        },

        toggle: {
            width: 6,
            height: 6,
            backgroundColor: colourScheme.secondary,
            borderRadius: 3
        },

        toggleTitle: {
            fontFamily: "inter_light",
            fontSize: 8,
            color: colourScheme.primary
        }
    })

}