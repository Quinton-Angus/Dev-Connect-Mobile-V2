import { View, Pressable, Animated, Easing, Text } from "react-native";
import { useContext, useRef, useState, useEffect } from "react";
import { ThemeContext } from "../app/_layout";
import toggleStylesScript from "../styles/toggleStyles"

export function Toggle({title, state, toggleFunction}) {

    // Get toggle Styling

    const toggleStyles = toggleStylesScript()

    // Get colour scheme

    const { colourScheme } = useContext(ThemeContext)
    
    // create the animation state

    const [ toggleState, setToggleState] = useState(state)

    // Create animatable value using useRef

    const animationState = useRef( new Animated.Value(toggleState ? 1 : 0) ).current

    // Re-run the animation when the value of toggleState changes

    useEffect(() => {

        const toggleAnimation = Animated.timing(animationState, {
            toValue: toggleState ? 1: 0,
            duration: 200,
            useNativeDriver: false
        })

        toggleAnimation.start()

        return () => {
            toggleAnimation.stop()
        }
    }, [toggleState])

     const dotSlide = animationState.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 12]
    })

    const mainBackgroundColor = animationState.interpolate({
        inputRange: [0, 1],
        outputRange: [colourScheme.tertiary, colourScheme.primary]
    })

    const dotBackgroundColor = animationState.interpolate({
        inputRange: [0, 1],
        outputRange: [colourScheme.secondary, colourScheme.background]
    })

    return (
        <View style={toggleStyles.toggleContainer}>
            <Text style={toggleStyles.toggleTitle}>{title}</Text>
            <Pressable onPress={() => {toggleState ? setToggleState(false) : setToggleState(true); toggleFunction()}}><Animated.View style={[toggleStyles.toggleWrapper, { backgroundColor: mainBackgroundColor }]}>
                <Animated.View style={[toggleStyles.toggle, { transform: [ { translateX: dotSlide } ], backgroundColor: dotBackgroundColor }]}/>
            </Animated.View></Pressable>
        </View>
    )

}