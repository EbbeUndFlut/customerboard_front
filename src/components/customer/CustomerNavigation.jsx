import CustomerAdd from "./CustomerAdd"
import CustomerList from "./CustomerList"

const CustomerNavigation = (props) => {
    const navigate = (e) => {
        switch (e.target.innerText) {
            case "Liste": props.setcomponent(<CustomerList />)
                break
            case "Adden": props.setcomponent(<CustomerAdd />)
                break
            default: props.setcomponent(<CustomerList />)
        }
    }
    return (
        <nav className="h-screen bg-purple-800 text-white p-2" onClick={navigate}>
            <p className="cursor-pointer">Liste</p>
            <p className="cursor-pointer">Adden</p>
        </nav>
    )
}

export default CustomerNavigation