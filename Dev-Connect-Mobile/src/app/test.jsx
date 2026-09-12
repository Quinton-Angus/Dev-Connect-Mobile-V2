import { View, Image, Text } from "react-native"
import { File, Directory, Paths } from "expo-file-system"

export default function Test() {

    const appData = new Directory(
        Paths.document,
        "appData"
    )

    const profilePhoto = new File(
        appData,
        "profilePhoto.png"
    )

    console.log("Photo URI:", profilePhoto.uri)
    console.log("Photo exists:", profilePhoto.exists)

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

            <Text>
                Exists: {profilePhoto.exists ? "YES" : "NO"}
            </Text>

            <Image
                source={{ uri: profilePhoto.uri }}
                style={{
                    width: 200,
                    height: 200,
                    marginTop: 20
                }}
            />

        </View>
    )
}