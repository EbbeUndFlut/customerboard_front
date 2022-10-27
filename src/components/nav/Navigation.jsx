import { useState } from "react";
import Customer from "../customer/Customer";
import Overview from "../Overview";
import Projects from "../Projects";
const Navigation = (props) => {
    const [renderContent, setRenderContent] = useState('customer')

    const navigate = (e) => {

        switch (e.target.innerText) {
            case "Home": props.setcomponent(<Overview />)
                break
            case "Kunden": props.setcomponent(<Customer />)
                break
            case "Projekte": props.setcomponent(<Projects />)
                break
        }

    }
    return (
        <nav className="flex flex-row justify-around items-center text-3xl text-white  h-20 w-screen bg-purple-300" onClick={navigate}>
            <p className="hover:text-purple-700 cursor-pointer">Home</p>
            <p className="hover:text-purple-700 cursor-pointer">Kunden</p>
            <p className="hover:text-purple-700 cursor-pointer">Projekte</p>
        </nav>
    )
}

export default Navigation