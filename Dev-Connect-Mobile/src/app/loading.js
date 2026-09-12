import { Screen } from "../components/screen";
import { View } from "react-native";
import loadingStylesSheet from "../styles/loadingStyles"
import { Animated, Easing } from "react-native";
import { useEffect, useRef } from "react";

export default function loading() {

    const loadingStyles = loadingStylesSheet()

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
        <Screen>
            <Animated.View style={[loadingStyles.spinner, { transform: [{rotate}] }]} />
        </Screen>
    )
    
}