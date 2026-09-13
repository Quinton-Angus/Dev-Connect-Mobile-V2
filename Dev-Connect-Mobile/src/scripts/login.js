import { router } from "expo-router"
import * as secureStore from "expo-secure-store"
import { File, Directory, Paths } from "expo-file-system"
import * as FileSystem from "expo-file-system/legacy"
import AsyncStorage from "@react-native-async-storage/async-storage"

export function loginScript() {
    return async function login(setLoading, email, password) {
        
        setLoading(true)

        console.log(`Email: ${email}, Password: ${password}`)

        // Verify account details

        const account = await fetch("https://api.quintondev.com/v1/connect/mobile/account/appToken", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                email: email.toLowerCase(),
                password: password
            })
        })

        const accountResponse = await account.json()

        if (account.status === 500) {
            console.log(toString(accountResponse.error))
            setLoading(false)
            return
        } else if (account.status === 401) {
            console.log("Invalid log in credentials. Account authentication failure.")
            setLoading(false)
            return
        } else if (accountResponse.error) {
            console.log(toString(accountResponse.error))
            setLoading(false)
            return
        } else {
            console.log("Account authentication successful, continuing with login script.")

            const token = accountResponse.data.appToken

            await secureStore.setItemAsync("appToken", accountResponse.data.appToken)

            await AsyncStorage.setItem("linked", "true")

            setLoading(false)


            router.push("/loading")

            // Get account data including secure link to Pfp

            const data = await fetch("https://api.quintondev.com/v1/connect/mobile/account/data", {
                method: "POST",
                headers: {"Content-Type":"application/json", "Authorization": token}
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

            router.replace("/dash")

        }

    }
}