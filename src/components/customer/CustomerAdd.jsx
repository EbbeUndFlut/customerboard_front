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

    const add = () => {

    }
    return (
        <div>
            <img src={base64} alt="" />
            <input onChange={(e) => { setMail(e.target.value) }} type="mail" placeholder="Kundenmail" />
            <input onChange={(e) => { setName(e.target.value) }} type='text' placeholder="Kundenname" />
            <input onChange={(e) => setFile(e.target.files[0])} type="file" />
            <button onClick={add} className="mx-5 p-2 rounded bg-purple-400 text-white">Kunden anlegen</button>
        </div>

    )
}

export default CustomerAdd