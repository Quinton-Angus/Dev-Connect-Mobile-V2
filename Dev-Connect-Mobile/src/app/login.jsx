import { View, Text, Pressable, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import loginStylesFunction from "../styles/loginStyles"
import { Screen } from "../components/screen";
import { Header } from "../components/header";
import exitScript from "../scripts/exit"
import exitIconLight from "../assets/exitIconLight.png"
import exiticonDark from "../assets/exitIconDark.png"
import { Content } from "../components/content"
import { use, useContext } from "react";
import { ThemeContext } from "./_layout";
import { useEffect } from "react";
import { Footer } from "../components/footer";
import { useState } from "react";
import { loginScript } from "../scripts/login"
import { useRef } from "react";
import { Animated } from "react-native";
import { Easing } from "react-native";

export default function login() {

    const loginStyles = loginStylesFunction()

    const { setTheme } = useContext(ThemeContext)

    const login = loginScript()

    useEffect(() => {
        setTheme("light")
    }, [])



    const spinnerRotation = useRef(new Animated.Value(0)).current


    useEffect(() => {
        const spinnerAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(spinnerRotation, {
                    toValue: 1,
                    duration: 900,
                    useNativeDriver: true,
                    easing: Easing.inOut(Easing.ease)
                }),

                Animated.delay(50),

            ])
        )

        spinnerAnimation.start()

        return () => {
            spinnerAnimation.stop()
        }
    }, [])

    const rotate = spinnerRotation.interpolate({
        inputRange: [0,1],
        outputRange: ["0deg", "360deg"]
    })




    const [ loading, setLoading] = useState(false)
    const [ email, setEmail] = useState()
    const [ password, setPassword ] = useState()

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
                            <TextInput style={loginStyles.input} onChangeText={setEmail} value={email}></TextInput>
                        </View>
                        <View style={loginStyles.loginInputWrapper}>
                            <Text style={loginStyles.inputText}>Password</Text>
                            <TextInput style={loginStyles.input} value={password} onChangeText={setPassword} secureTextEntry></TextInput>
                        </View>
                        <Pressable style={loginStyles.loginBtn} onPress={() => {login(setLoading, email, password)}}>
                            { loading === false ? (<Text style={loginStyles.loginBtnText}>Login</Text>) : (<Animated.View style={[ loginStyles.loadingSpinner , { transform: [{rotate}] }]} />)}
                        </Pressable>
                    </View>
                </View>
                <Footer/>
            </Content>
        </Screen>
    )
}