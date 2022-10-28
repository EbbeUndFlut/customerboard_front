import { Link } from "react-router-dom"

const CustomerItem = ({ customer }) => {
    return (
        <Link to={`/detail/${customer._id}`}>
            <div className='flex flex-row border rounded w-full bg-purple-200 hover:bg-purple-700 hover:text-white'>
                <img className='w-10' src={customer.pic} alt={customer.name} />
                <p className="text-3xl">{customer.name}</p>

            </div>
        </Link>
    )
}

export default CustomerItem