import { StyleSheet } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../app/_layout";

export default () => {

    const { colourScheme } = useContext(ThemeContext)

    return StyleSheet.create({
        spinner: {
            width: 50,
            height: 50,
            borderWidth: 2,
            borderColor: colourScheme.tertiary,
            borderRadius: 25,
            borderTopColor: colourScheme.primary
        }
    })

}