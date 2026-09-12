import { View } from "react-native";
import contentStyles from "../styles/contentStyles"

export function Content({ children }) {
    return (
        <View style={contentStyles.content}>{children}</View>
    )
}