import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Shop = () => {
    const [data, setData] = useState([])
    const nav = useNavigate()
    useEffect(() => {
        fetch('http://localhost:9898/api/konto', {
            headers: {
                Authentication: 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(res => res.json())
            .then(result => {
                if (result.state !== undefined) nav('/')

            })
    }, [])
    return (
        <main>
            <h1>Shop</h1>
            {data.map((item, key) => {
                return <div key={key}><p>{item.name} : {item.konto}Euro</p></div>
            })}
        </main>
    )
}

export default Shop