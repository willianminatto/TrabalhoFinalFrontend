import { useState } from 'react'
import './ProductForm.css'

function ProductForm() {
    const [namea, setName] = useState("")
    const [pricep, setPriceP] = useState("")
    const [stock, setStock] = useState("")

    const saveProduct = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ namea, pricep, stock })
        })
    }




    return (
        <div className='container'>
        <h2>Cadastro de Produtos</h2>
        <form onSubmit={(e) => saveProduct(e)}>
            <label className='form-label' htmlFor="nome">Nome:</label>
            <input className='form-input' value={namea} type="text" name="nome" onChange={(e) => setName(e.target.value)} required/>
            <label className='form-label' htmlFor="preco">Preço:</label>
            <input className='form-input' value={pricep} type="number" name="preco" onChange={(e) => setPriceP(e.target.value)} required/>
            <label className='form-label' htmlFor="estoque">Estoque:</label>
            <input className='form-input' value={stock} type="number" name="estoque" onChange={(e) => setStock(e.target.value)} required/>
            <input className='form-submit' type="submit" value="Cadastrar" />
        </form>
      </div>
    )
}

export default ProductForm
