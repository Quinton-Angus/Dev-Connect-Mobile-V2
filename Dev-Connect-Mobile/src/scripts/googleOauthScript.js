import { Linking } from "react-native";

export function startOauthGoogle() {
    Linking.openURL("https://api.quintondev.com/v1/connect/mobile/Oauth/google")
}