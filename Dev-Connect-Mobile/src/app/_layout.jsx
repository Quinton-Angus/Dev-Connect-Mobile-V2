import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, createContext } from "react"
import { Appearance } from "react-native"
import colours from "../constants/colours"
import regular from "../assets/fonts/Inter_18pt-Regular.ttf"
import light from "../assets/fonts/Inter_18pt-Light.ttf"
import extra_light from "../assets/fonts/Inter_18pt-ExtraLight.ttf"
import thin from "../assets/fonts/Inter_18pt-Thin.ttf"
import medium from "../assets/fonts/Inter_18pt-Medium.ttf"
import semi_bold from "../assets/fonts/Inter_18pt-SemiBold.ttf"
import bold from "../assets/fonts/Inter_18pt-Bold.ttf"
import extra_bold from "../assets/fonts/Inter_18pt-ExtraBold.ttf"
import black from "../assets/fonts/Inter_18pt-Black.ttf"

export const ThemeContext = createContext({})

export default function rootLayout() {

    const [themeLoaded, setThemeloaded ] = useState(false)
    const [theme, setTheme] = useState("light")

    const [fontsLoaded] = useFonts({
        inter_thin: thin,
        inter_extra_light: extra_light,
        inter_light: light,
        inter_regular: regular,
        inter_medium: medium,
        inter_semi_bold: semi_bold,
        inter_bold: bold,
        inter_extra_bold: extra_bold,
        inter_black: black  
    })

    useEffect(() => {
        const loadTheme = async () => {
            const theme = await AsyncStorage.getItem("theme") ?? Appearance.getColorScheme()

            setTheme(theme)

            setThemeloaded(true)
        }

        loadTheme()

    }, [])

    useEffect(() => {

        if (fontsLoaded && themeLoaded === true) {
            SplashScreen.hide()
        }

    }, [fontsLoaded, themeLoaded])

    if (!fontsLoaded || themeLoaded === false) {
        return null
    }

    const colourScheme = theme === "dark" ? colours.dark : colours.light

    return (
        <ThemeContext.Provider value={{ colourScheme, theme, setTheme }}>
            <Stack screenOptions={{headerShown: false}} />
        </ThemeContext.Provider>
    )
        
}