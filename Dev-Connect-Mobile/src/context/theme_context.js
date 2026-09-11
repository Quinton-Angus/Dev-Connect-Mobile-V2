import { Children, createContext, useState } from "react";
import { Appearance } from "react-native";
import colours from "../constants/colours"



export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {
    const [theme, set_theme] = useState(Appearance.getColorScheme())

    const colour_scheme = theme === "dark" ? colours.dark : colours.light

    return (
        <ThemeContext.Provider value={{
            colour_scheme, theme, set_theme
        }}>
            { Children }
        </ThemeContext.Provider>
    )
}
