export function loginScript() {
    return async function login(setLoading, email, password
    ) {
        setLoading(true)

        // Verify account details

        const account = await fetch("https://api.quintondev.com/v1/connect/mobile/account/appToken")
    }
}