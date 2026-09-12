import { View, Pressable, Image, Text } from "react-native";
import headerStylesSheet from "../styles/headerStyles"
import { useContext } from "react";
import { ThemeContext } from "../app/_layout";

export function Header({ title, leftIcon, rightIcon }) {

    const { theme } = useContext(ThemeContext)
    
    const headerStyles = headerStylesSheet()

    return (
        <View style={headerStyles.headerWrapper}>
            <View style={headerStyles.btnWrapper}>
                {leftIcon.use && (<Pressable style={headerStyles.btn} onPress={() => {leftIcon.function()}}><Image  style={headerStyles.btnIcon} source={theme === "light" ? leftIcon.icon.light : leftIcon.icon.dark} /></Pressable>)}
            </View>
            <Text style={headerStyles.title}>{title}</Text>
            <View style={headerStyles.btnWrapper}>
                {rightIcon.use && (<Pressable style={headerStyles.btn} onPress={() => {rightIcon.function()}}><Image  style={headerStyles.btnIcon} source={theme === "light" ? rightIcon.icon.light : rightIcon.icon.dark} /></Pressable>)}
            </View>
        </View>   
    )

}