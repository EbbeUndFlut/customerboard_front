import { useEffect, useState } from "react"
import CustomerItem from "./CustomerItem"

const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    useEffect(() => {
        fetch('http://localhost:9898/api/customer', {
            headers: {
                'authentication': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => response.json())
            .then(data => setCustomers(data))

    }, [])
    return (
        <div>
            {customers.map((customer, key) => <CustomerItem key={key} customer={customer} />)}
        </div>
    )
}

export default CustomerList