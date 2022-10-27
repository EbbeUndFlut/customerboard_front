import { useEffect, useState } from "react"
import Navigation from "../components/nav/Navigation"
import Overview from "../components/Overview"

const Home = (props) => {
    const [user, setUser] = useState()
    const [component, setComponent] = useState(<Overview />)
    useEffect(() => {
        const token = localStorage.getItem('token')
        setUser(token)
    }, [])
    return (
        <>
            <Navigation setcomponent={setComponent} />
            {component}
        </>

    )
}

export default Home