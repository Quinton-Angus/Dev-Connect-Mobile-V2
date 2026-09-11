import { Children, createContext, useState } from "react";
import { Appearance } from "react-native";
import colours from "../constants/colours"



export const theme_context = createContext({})

export const theme_provider = ({ children }) => {
    const [theme, set_theme] = useState(Appearance.getColorScheme())

    const colour_scheme = theme === "dark" ? colours.dark : colours.light

    return (
        <theme_context.Provider value={{
            colour_scheme, theme, set_theme
        }}>
            { Children }
        </theme_context.Provider>
    )
}
