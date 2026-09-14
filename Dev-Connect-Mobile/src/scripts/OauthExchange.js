import { router } from "expo-router"
import * as secureStore from "expo-secure-store"
import { File, Directory, Paths } from "expo-file-system"
import * as FileSystem from "expo-file-system/legacy"
import AsyncStorage from "@react-native-async-storage/async-storage"

export default async (otp) => {

    router.replace("/loading")

    // Exchange otp for the app token

    const exchangeRequest = await fetch("https://api.quintondev.com/v1/connect/mobile/Oauth/exchange", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({
            otp: otp
        })
    })

    const exchangeRequestData = await exchangeRequest.json()

    if (exchangeRequestData.status === false) {
        return console.log(toString(exchangeRequestData.error))
    }

    const appToken = exchangeRequestData.data.appToken

    // Save app Token

    await secureStore.setItemAsync("appToken", appToken)

    // Get data

    const data = await fetch("https://api.quintondev.com/v1/connect/mobile/account/data", {
        method: "POST",
        headers: {"Content-Type":"application/json", "Authorization": appToken}
    })

    const accountData = await data.json()

    const name = accountData.data.name
    const email = accountData.data.email

    await secureStore.setItemAsync("name", name)
    await secureStore.setItemAsync("email", email)

    // Generate JS loaction of app data and create the appData directory (folder)

    const appData = new Directory(Paths.document, "appData")

    appData.create({
        idempotent: true,
        intermediates: true
    })

    await FileSystem.downloadAsync(accountData.data.profilePhotoUrl, `${appData.uri}/profilePhoto.png`)

    await AsyncStorage.setItem("linked", "true")

    router.replace("/dash")
}