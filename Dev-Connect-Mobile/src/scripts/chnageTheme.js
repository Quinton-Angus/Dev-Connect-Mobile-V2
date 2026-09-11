import { useContext } from "react";
import { ThemeContext } from "../app/_layout";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useChangeTheme() {
    const { setTheme, theme } = useContext(ThemeContext)


    async function chnageTheme() {
        const newTheme = theme === "light" ? "dark" : "light"

        setTheme(newTheme)

        AsyncStorage.setItem("theme", newTheme)
    }

    return chnageTheme
}