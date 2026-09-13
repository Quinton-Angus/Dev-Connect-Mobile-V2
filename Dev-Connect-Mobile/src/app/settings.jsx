import { View, Text, Image, Pressable } from "react-native";
import { Header } from "../components/header";
import { Screen } from "../components/screen";
import { Content } from "../components/content";
import backScript from "../scripts/back"
import { Footer } from "../components/footer";
import { useContext } from "react";
import { ThemeContext } from "./_layout";
import settingsStylesScript from "../styles/settingsStyles"
import * as secureStore from "expo-secure-store"
import { File, Directory, Paths } from "expo-file-system"
import { Toggle } from "../components/toggle"
import Constants from "expo-constants"
import logoutScript from "../scripts/logout"


import backIconLight from "../assets/backIconLight.png"
import backIconDark from "../assets/backIconDark.png"
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function settings() {

    const { setTheme, theme } = useContext(ThemeContext)

    const settingsStyles = settingsStylesScript()

    const name = secureStore.getItem("name")
    const email = secureStore.getItem("email")

    const appData = new Directory(Paths.document, "appData")

    const profilePhoto = new File(appData, "profilePhoto.png")

    const version = Constants.expoConfig.version

    return (
        <Screen>
            <Header title={"Settings"} leftIcon={{use: true, icon: {light: backIconLight, dark: backIconDark}, function: backScript}} rightIcon={{use: false}}/>
            <Content>
                <View style={settingsStyles.userContent}>
                    <Image source={{ uri: profilePhoto.uri }} style={settingsStyles.profilePhoto} key={email} />
                    <Text style={settingsStyles.name}>{name}</Text>
                    <Text style={settingsStyles.email}>{email}</Text>
                    <View style={settingsStyles.userContentDivider} />
                </View>
                <View style={settingsStyles.sectionContent}>
                    <Text style={settingsStyles.contentTitle}>Account</Text>
                    <View style={[settingsStyles.accountInfoWrapper, {marginBottom: 15}]}>
                        <Text style={settingsStyles.accountInfoText}>Email</Text>
                        <View style={settingsStyles.accountInfoDetailWrapper}>
                            <Text style={settingsStyles.accountInfoDetailText}>{email}</Text>
                        </View>
                    </View>
                    <View style={settingsStyles.accountInfoWrapper}>
                        <Text style={settingsStyles.accountInfoText}>Name</Text>
                        <View style={settingsStyles.accountInfoDetailWrapper}>
                            <Text style={settingsStyles.accountInfoDetailText}>{name}</Text>
                        </View>
                    </View>
                </View>
                <View style={settingsStyles.sectionContent}>
                    <Text style={settingsStyles.contentTitle}>Preferances</Text>
                    <View style={settingsStyles.toggles}>
                        <Toggle title={"Dark mode"} state={theme === "dark" ? true : false} toggleFunction={ async () => {setTheme(theme === "light" ? "dark" : "light"); await AsyncStorage.setItem("theme", theme === "light" ? "dark" : "light")}} />
                        <Toggle title={"Email updates"} state={false} toggleFunction={() => {console.log("I'm a function!")}} />
                        <Toggle title={"Notifications"} state={false} toggleFunction={() => {console.log("I'm a function!")}} />
                    </View>
                </View>
                <View style={settingsStyles.sectionContent}>
                    <Text style={settingsStyles.contentTitle}>App</Text>
                    <Text style={settingsStyles.copyright}>Dev Connect Mobile. © Quinton Dev Studios 2026, All rights reserved. </Text>
                    <Text style={settingsStyles.version}>Software version: v{version}</Text>
                    <Pressable onPress={() => {logoutScript()}}>
                        <View style={settingsStyles.logoutBtn}><Text style={settingsStyles.logoutText}>Log out</Text></View>
                    </Pressable>
                </View>
            </Content>
            <Footer />
        </Screen>
    )
}