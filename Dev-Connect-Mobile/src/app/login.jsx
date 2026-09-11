import { View } from "react-native";
import { useContext } from "react";
import { theme_context } from "../context/theme_context";

export default function login() {

    const { theme, set_theme, colorscheme } = useContext(theme_context)

    return ( <View /> )
}