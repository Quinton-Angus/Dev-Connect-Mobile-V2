import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useEffect, useState } from "react";
import { Appearance } from "react-native";
import colours from "../constants/colours"



export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
    const [theme, set_theme] = useState(null)
    const [loading, set_loading] = useState(true)

    useEffect(() => {
        const load_theme = async () => {
            const stored_theme = await AsyncStorage.getItem("theme")
            set_theme(stored_theme ?? Appearance.getColorScheme())
            set_loading(false)
        }

        load_theme()
    }, [])

    useEffect(() => {
        if (theme !== null) {
            AsyncStorage.setItem("theme", theme)
        }
    }, [theme])

    const colour_scheme = theme === "dark" ? colours.dark : colours.light

    if (loading) {
        return null
    }

    return (
        <ThemeContext.Provider value={{
            colour_scheme, theme, set_theme
        }}>
            {children}
        </ThemeContext.Provider>
    )
}
