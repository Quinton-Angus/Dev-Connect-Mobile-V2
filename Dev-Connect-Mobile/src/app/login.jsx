import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import mainStylesFunction from "../styles/mainStyles"
import loginStylesFunction from "../styles/loginStyles"
import useChangeTheme from "../scripts/chnageTheme"

export default function login() {

    const mainStyles = mainStylesFunction()
    const loginStyles = loginStylesFunction()

    const changeTheme = useChangeTheme()

    return (
        <SafeAreaView style={mainStyles.safeAreaView}>
            <View style={mainStyles.screen}>
                <Pressable style={loginStyles.btn} onPress={() => {changeTheme()}}>
                    <Text style={loginStyles.btntext}>Change theme</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}