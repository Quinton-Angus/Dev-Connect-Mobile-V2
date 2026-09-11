import { useFonts } from "expo-font"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { ThemeProvider } from "../context/theme_context"

import regular from "../assets/fonts/Inter_18pt-Regular.ttf"
import light from "../assets/fonts/Inter_18pt-Light.ttf"
import extra_light from "../assets/fonts/Inter_18pt-ExtraLight.ttf"
import thin from "../assets/fonts/Inter_18pt-Thin.ttf"
import medium from "../assets/fonts/Inter_18pt-Medium.ttf"
import semi_bold from "../assets/fonts/Inter_18pt-SemiBold.ttf"
import bold from "../assets/fonts/Inter_18pt-Bold.ttf"
import extra_bold from "../assets/fonts/Inter_18pt-ExtraBold.ttf"
import black from "../assets/fonts/Inter_18pt-Black.ttf"

export default function rootLayout() {

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

            if (fontsLoaded) {
                SplashScreen.hide()
            }

        }, [fontsLoaded])

        if (!fontsLoaded) {
            return null
        }

        return (
            <ThemeProvider>
                <Stack screenOptions={{headerShown: false}} />
            </ThemeProvider>
        )
        
}