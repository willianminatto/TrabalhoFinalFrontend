import './ProductForm.css'
import { useState } from 'react'

function ServiceForm() {

    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")
    const [time, setTime] = useState("")
    const [typeservice, setTypeService] = useState("")
    const [prestador, setPrestador] = useState("")

    const saveProduct = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/servicos", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ description, price, time, typeservice, prestador })
        })
    }


    return (
        <div className='container'>
            <h2>Cadastro de Serviços</h2>
            <form onSubmit={(e) => saveProduct(e)}>
                <label className='form-label' htmlFor="nome">Descrição:</label>
                <input className='form-input' value={description} type="text" name="nome" onChange={(e) => setDescription(e.target.value)} required />
                <label className='form-label' htmlFor="preco">Preço:</label>
                <input className='form-input' value={price} type="number" name="preco" onChange={(e) => setPrice(e.target.value)} required />
                <label className='form-label' htmlFor="estoque">Tempo:</label>
                <input className='form-input' value={time} type="number" name="tempo" onChange={(e) => setTime(e.target.value)} required />
                <label className='form-label' htmlFor="estoque">Tipo serviço:</label>
                <input className='form-input' value={typeservice} type="text" name="tipo" onChange={(e) => setTypeService(e.target.value)} required />
                <label className='form-label' htmlFor="nome">Prestador:</label>
                <input className='form-input' value={prestador} type="text" name="nome" onChange={(e) => setPrestador(e.target.value)} required />
                <input className='form-submit' type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}

export default ServiceForm