import { Linking } from "react-native";

export function startOauthGithub() {
    Linking.openURL("https://api.quintondev.com/v1/connect/mobile/Oauth/github")
}