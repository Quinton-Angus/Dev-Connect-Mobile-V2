import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from "expo-router"

export default async function boot() {
    const [_, linked] = await Promise.all([
        await new Promise(Resolve => setTimeout(Resolve, 1500)),
        await AsyncStorage.getItem("linked")
    ])

    if (linked === "true") {
        router.replace("/dash")
    } else {
        router.replace("/login")
    }
}