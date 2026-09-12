import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import mainStylesSheet from "../styles/mainStyles"

export function Screen({ children }) {

    const mainStyles = mainStylesSheet()

    return (
        <SafeAreaView style={mainStyles.safeAreaView}>
            <View style={mainStyles.screen}>
                {children}
            </View>
        </SafeAreaView>
    )
}