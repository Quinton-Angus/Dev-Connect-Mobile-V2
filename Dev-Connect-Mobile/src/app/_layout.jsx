import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, createContext } from "react"
import { Appearance } from "react-native"
import colours from "../constants/colours"
import {
    Inter_100Thin,
    Inter_200ExtraLight,
    Inter_300Light,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black
} from "@expo-google-fonts/inter"

export const ThemeContext = createContext({})

export default function rootLayout() {

    const [themeLoaded, setThemeloaded ] = useState(false)
    const [theme, setTheme] = useState("light")

    const [fontsLoaded] = useFonts({
        inter_thin: Inter_100Thin,
        inter_extra_light: Inter_200ExtraLight,
        inter_light: Inter_300Light,
        inter_regular: Inter_400Regular,
        inter_medium: Inter_500Medium,
        inter_semi_bold: Inter_600SemiBold,
        inter_bold: Inter_700Bold,
        inter_extra_bold: Inter_800ExtraBold,
        inter_black: Inter_900Black  
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
            <Stack screenOptions={{headerShown: false, animation: "none"}} />
        </ThemeContext.Provider>
    )
        
}