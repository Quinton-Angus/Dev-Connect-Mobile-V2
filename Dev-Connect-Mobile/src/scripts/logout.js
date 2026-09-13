import { router } from "expo-router"
import * as secureStore from "expo-secure-store"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default async () => {
        router.push("/loading")

        await secureStore.deleteItemAsync("appToken")
        await secureStore.deleteItemAsync("name")
        await secureStore.deleteItemAsync("email")

        await AsyncStorage.setItem("linked", "false")

        router.replace("/login")
}