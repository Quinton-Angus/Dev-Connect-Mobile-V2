import { Header } from "../components/header";
import { Footer } from "../components/footer"
import { Screen } from "../components/screen";
import { Text, View } from "react-native";
import { router } from "expo-router";
import dashStylesScript from "../styles/dashStyles"
import backScript from "../scripts/back"
import { Content } from "../components/content"
import { useContext } from "react";
import { ThemeContext } from "../app/_layout";

import backIconLight from "../assets/backIconLight.png"
import backIconDark from "../assets/backIconDark.png"

import setingsIconLight from "../assets/settingsIconLight.png"
import settingsIconDark from "../assets/settingsIconDark.png"

const settings = () => {
    router.push("/settings")
}

export default function dash() {

    const dashStyles = dashStylesScript()

    return (
        <Screen>
            <Header title={"Dashboard"} leftIcon={{use: true, function: backScript, icon: {light: backIconLight, dark: backIconDark}}} rightIcon={{use: true, function: settings, icon: {light: setingsIconLight, dark: settingsIconDark}}} />
            <Content>
                <View style={dashStyles.content}><Text style={dashStyles.commingSoon}>Comming soon</Text></View>
            </Content>
            <Footer />
        </Screen>
    )

}