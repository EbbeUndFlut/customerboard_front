import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const CustomerDetail = () => {
    const [customer, setCustomer] = useState({})
    const params = useParams()

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


    return (
        <div>
            <h1>{customer.name}</h1>
            <img src={customer.pic} alt="" />
        </div>
    )
}

export default CustomerDetail