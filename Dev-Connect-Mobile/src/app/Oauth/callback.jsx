import { fixCurrentParams } from "expo-router/build/fork/getPathFromState-forks";
import { Screen } from "../../components/screen";
import Oauth from "../../scripts/OauthExchange"
import { useEffect } from "react";
import { useLocalSearchParams} from "expo-router"

export default function callback() {

    const otp = useLocalSearchParams().otp

    useEffect(() => {
        Oauth(otp)
    }, [])

    return (
        <Screen />
    )
}