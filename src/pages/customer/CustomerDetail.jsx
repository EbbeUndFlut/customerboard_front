import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"

const CustomerDetail = () => {
    const [customer, setCustomer] = useState({})
    const params = useParams()
    const nav = useNavigate()

    useEffect(() => {
        fetch('http://localhost:9898/api/customer/' + params.id, {
            headers: {
                'authentication': 'Bearer ' + localStorage.getItem('token')
            }

        })
            .then(response => response.json())
            .then(data => setCustomer(data))
    }, [])
    console.log(params.id);

    const remove = async (e) => {
        const response = await fetch('http://localhost:9898/api/customer', {
            method: 'DELETE',
            headers: {
                'authentication': 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: params.id })
        })

        const data = await response.json()
        if (data.state) nav('/home')

    }

    const createLogin = async (e) => {
        const result = await fetch('http://localhost:9898/api/customer/login', {
            method: 'PUT',
            headers: {
                'authentication': 'Bearer ' + localStorage.getItem('token'),
                'content-type': 'application/json'
            },
            body: JSON.stringify({ id: params.id })
        })
    }

    return (
        <div className="flex flex-row p-5">
            <img className="rounded-full w-20 h-20 " src={customer.pic} alt="" />
            <h1 className="text-3xl mx-5">{customer.name}</h1>
            <button onClick={remove} className="bg-red-800 px-5 py-2 text-white text-xl mx-5 rounded hover:bg-red-400">DELETE</button>
            <button onClick={createLogin} className="bg-blue-400 px-5 py-2 text-xl text-white mx-5 rounded hover:bg-blue-600">Create Login</button>

        </div>
    )
}

export default CustomerDetail