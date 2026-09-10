import { View, Image, Animated, Easing } from "react-native";
import main_styles from "../styles/main_styles.js"
import splash_styles from "../styles/splash_styles.js"
import { SafeAreaView } from "react-native-safe-area-context";
import splash_logo from "../assets/splash_screen_logo.png"
import { useEffect, useRef } from "react";

export default function login() {

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

    return (
        <SafeAreaView style={main_styles.safeAreaView}>
            <View style={main_styles.screen}>
                <View style={splash_styles.logo_container}>
                    <Image source={splash_logo} style={splash_styles.splash_icon} />
                </View>
                <Animated.View style={[splash_styles.spinner_container, {transform: [{rotate}]}]}>
                    <View style={splash_styles.spinner} />
                </Animated.View>
            </View>
        </SafeAreaView>
    )
}