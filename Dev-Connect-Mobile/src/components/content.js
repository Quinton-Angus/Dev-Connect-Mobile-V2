import { View } from "react-native";
import contentStyles from "../styles/contentStyles"
import { ScrollView } from "react-native";

export function Content({ children }) {
    return (
        <View style={contentStyles.content}>
            <ScrollView><View style={contentStyles.contentWrapper}>{children}</View></ScrollView>
        </View>
    )
}