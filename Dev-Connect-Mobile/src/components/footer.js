import { View, Text, Pressable } from "react-native";
import footerStylesSheet from "../styles/footerStyles"

export function Footer() {

    const footerStyles = footerStylesSheet()

    return (
        <View style={footerStyles.footerContainer}>
            <View style={footerStyles.footerWrapper}>
                <Pressable><Text style={footerStyles.footerLink}>Terms</Text></Pressable>
                <Pressable><Text style={footerStyles.footerLink}>Support</Text></Pressable>
                <Pressable><Text style={footerStyles.footerLink}>Privacy</Text></Pressable>
            </View>
        </View>
    )

}