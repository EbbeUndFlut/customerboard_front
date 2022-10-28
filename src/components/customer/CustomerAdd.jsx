import { useEffect, useState } from "react"

const CustomerAdd = () => {
    const [mail, setMail] = useState('')
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [base64, setBase64] = useState('')

    useEffect(() => {
        if (file) {
            console.log(file.size);
            const reader = new FileReader()
            reader.onload = handleReaderLoaded
            reader.readAsDataURL(file)
        }
    }, [file])

    const handleReaderLoaded = (event) => {
        setBase64(event.target.result)
    }

    const add = async () => {
        const customer = {
            email: mail,
            name,
            pic: base64
        }

        const response = await fetch('http://localhost:9898/api/customer', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authentication': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(customer)
        })
        const data = await response.json()
        if (data.state) {
            setBase64('')
            setMail('')
            setName('')

        }
        console.log(data);

    }
    return (
        <div>
            <img src={base64} alt="" />
            <input value={mail} onChange={(e) => { setMail(e.target.value) }} type="mail" placeholder="Kundenmail" />
            <input value={name} onChange={(e) => { setName(e.target.value) }} type='text' placeholder="Kundenname" />
            <input onChange={(e) => setFile(e.target.files[0])} type="file" />
            <button onClick={add} className="mx-5 p-2 rounded bg-purple-400 text-white">Kunden anlegen</button>
        </div>

    )
}

export default CustomerAdd