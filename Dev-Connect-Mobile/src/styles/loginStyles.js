import { ThemeContext } from "../app/_layout";
import { StyleSheet } from "react-native";
import { useContext } from "react";

export default () => {
    const { colourScheme } = useContext(ThemeContext)

    return StyleSheet.create({
        
        btn: {
            width: 200,
            height: 50,
            borderRadius: 10,
            backgroundColor: colourScheme.primary,
            justifyContent: "center",
            alignItems: "center"
        },

        btntext: {
            fontSize: 20,
            color: colourScheme.background,
        }
    })
}