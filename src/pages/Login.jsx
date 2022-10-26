import { useState } from "react"
import { useNavigate } from "react-router-dom"
import LoginForm from "../components/LoginForm"

const Login = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const nav = useNavigate()

    const login = async () => {
        const result = await fetch('http://localhost:9898/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, pass })
        })
        if (result.status === 200) {
            const data = await result.json()

            localStorage.setItem('token', data.token)
            nav('/home')
        }


    }
    return (
        <main className="flex flex-row items-center justify-center h-screen">
            <div className="flex flex-col gap-10 border w-1/4 p-8">
                <div className="flex flex-row justify-around"><p>CustomerBoard</p></div>
                <LoginForm login={login} setemail={setEmail} setpass={setPass} />
            </div>

        </main>
    )
}
export default Login