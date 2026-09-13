import { useContext } from "react";
import { ThemeContext } from "../app/_layout";
import { StyleSheet } from "react-native";

export default () => {
    
    const { colourScheme } = useContext(ThemeContext)

    return StyleSheet.create({
        commingSoon: {
            fontFamily: "inter_bold",
            color: colourScheme.primary,
            fontSize: 15
        },

        content: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }
    })

}