import { useEffect, useState } from "react"

const Home = (props) => {
    const [user, setUser] = useState()
    useEffect(() => {
        const token = localStorage.getItem('token')
        setUser(token)
    }, [])
    return (
        <h1>Hallo {user}</h1>
    )
}

export default Home