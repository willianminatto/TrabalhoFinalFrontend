import { useState } from 'react'
import './ProductForm.css'

function ClientForm() {
    const [name, setName] = useState("")
    const [CPF, setCPF] = useState("")
    const [contact, setContact] = useState("")
    const [adress, setAdress] = useState("")

    const saveProduct = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/cliente", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ name, CPF, contact, adress })
        })
    }

    return (
        <div className='container'>
            <h2>Cadastro de Clientes</h2>
            <form onSubmit={(e) => saveProduct(e)}>
                <label className='form-label' htmlFor="nome">Nome:</label>
                <input className='form-input' value={name} type="text" name="nome" onChange={(e) => setName(e.target.value)} required />
                <label className='form-label' htmlFor="preco">CPF:</label>
                <input className='form-input' value={CPF} type="number" name="CPF" onChange={(e) => setCPF(e.target.value)} required />
                <label className='form-label' htmlFor="estoque">Contato:</label>
                <input className='form-input' value={contact} type="number" name="contato" onChange={(e) => setContact(e.target.value)} required />
                <label className='form-label' htmlFor="estoque">Endereço:</label>
                <input className='form-input' value={adress} type="text" name="endereço" onChange={(e) => setAdress(e.target.value)} required />
                <input className='form-submit' type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}

export default ClientForm