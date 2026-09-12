export function loginScript() {
    return async function login(setLoading, email, password) {
        
        setLoading(true)

        console.log(`Email: ${email}, Password: ${password}`)

        // Verify account details

        const account = await fetch("https://api.quintondev.com/v1/connect/mobile/account/appToken", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })

        const accountResponse = await account.json()

        if (account.status === 500) {
            console.log(toString(accountResponse.error))
            setLoading(false)
            return
        } else if (account.status === 401) {
            console.log("Invalid log in credentials. Account authentication failure.")
            setLoading(false)
            return
        } else if (accountResponse.error) {
            console.log(toString(accountResponse.error))
            setLoading(false)
            return
        } else {
            console.log("Account authentication successful, continuing with login script.")

            // Continue login script here.
        }

    }
}