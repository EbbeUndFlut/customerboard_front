import CustomerList from "./CustomerList"
import CustomerNavigation from "./CustomerNavigation"
import { useState } from "react"

const Customer = () => {
    const [component, setComponent] = useState(<CustomerList />)
    return (
        <div className="flex flex-row ">
            <CustomerNavigation setcomponent={setComponent} />
            {component}
        </div>
    )
}

export default Customer