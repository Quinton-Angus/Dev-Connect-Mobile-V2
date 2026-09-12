import { View, Text, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import loginStylesFunction from "../styles/loginStyles"
import { Screen } from "../components/screen";
import { Header } from "../components/header";
import exitScript from "../scripts/exit"
import exitIconLight from "../assets/exitIconLight.png"
import exiticonDark from "../assets/exitIconDark.png"
import { Content } from "../components/content"
import { useContext } from "react";
import { ThemeContext } from "./_layout";
import { useEffect } from "react";
import { Footer } from "../components/footer";

export default function login() {

    const loginStyles = loginStylesFunction()

    const { setTheme } = useContext(ThemeContext)

    useEffect(() => {
        setTheme("light")
    }, [])

    return (
        <Screen>
            <Header title={"Log in"} leftIcon={{use: true, icon: {light: exitIconLight, dark: exiticonDark}, function: exitScript}} rightIcon={{use: false}} ></Header>
            <Content>
                <View style={loginStyles.loginContainer}>
                    <View style={loginStyles.loginWrapper}>
                        <Text style={loginStyles.loginTitle}>Welcome in.</Text>
                        <Text style={loginStyles.loginSubTitle}>Log in to your Dev Connect account to continue.</Text>
                        <View style={loginStyles.loginInputWrapper}>
                            <Text style={loginStyles.inputText}>Email</Text>
                            <TextInput style={loginStyles.input}></TextInput>
                        </View>
                        <View style={loginStyles.loginInputWrapper}>
                            <Text style={loginStyles.inputText}>Password</Text>
                            <TextInput style={loginStyles.input} secureTextEntry></TextInput>
                        </View>
                        <Pressable style={loginStyles.loginBtn}>
                            <Text style={loginStyles.loginBtnText}>Login</Text>
                        </Pressable>
                    </View>
                </View>
                <Footer/>
            </Content>
        </Screen>
    )
}