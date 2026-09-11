import { View, Image, Animated, Easing } from "react-native";
import splashStyles from "../styles/splashStyles.js"
import { SafeAreaView } from "react-native-safe-area-context";
import splash_logo from "../assets/splash_screen_logo.png"
import { useEffect, useRef } from "react";
import boot from "../scripts/boot.js"
import { LinearGradient } from "expo-linear-gradient"

export default function index() {

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

        boot()

        return () => {
            spinnerAnimation.stop()
        }
    }, [])

    const rotate = spinnerRotation.interpolate({
        inputRange: [0,1],
        outputRange: ["0deg", "360deg"]
    })

    return (
        <LinearGradient style={splashStyles.screen} colors={["#313131", "#080808"]}>
            <SafeAreaView style={splashStyles.safeAreaView}>
                <View style={splashStyles.screen}>
                    <View style={splashStyles.logo_container}>
                        <Image source={splash_logo} style={splashStyles.splash_icon} />
                    </View>
                    <Animated.View style={[splashStyles.spinner_container, {transform: [{rotate}]}]}>
                        <View style={splashStyles.spinner} />
                    </Animated.View>
                </View>
            </SafeAreaView>
        </LinearGradient>
    )
}