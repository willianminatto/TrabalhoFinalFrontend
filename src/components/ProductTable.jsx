import classes from './ProductTable.module.css'
import { useEffect, useState } from 'react'

export default function ProductTable() {
    const [productList, setProductList] = useState([])

    const reqProductList = async () => {
        try {
            const response = await fetch('http://localhost:3000/produtos', {
                method: 'GET',
            });
            const data = await response.json();
            setProductList(data);
            console.log(data);
        } catch (error) {
            console.error('Ocorreu um erro na requisição:', error);
        }
    };

    const deleteProduct = async (id) => {
        await fetch(`http://localhost:3000/produtos/${id}`, {
            method: 'DELETE'
        }).then(() => {
            reqProductList()
        }).catch((err) => {
            console.log(err)
        })
    }

    const currencyFormatter = (value) => {
        return parseFloat(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    const numberFormatter = (value) => {
        return parseFloat(value).toFixed(2).replace('.', ',');
    }

    useEffect(() => {
        reqProductList()
    }, [])

    return (
        <div className={classes.table_container}>
            <h2>Lista de Produtos</h2>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Cod.</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Estoque (kg)</th>
                        <th style={{ textAlign: 'center' }}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.namea}</td>
                            <td>{currencyFormatter(prod.pricep)}</td>
                            <td>{numberFormatter(prod.stock)}</td>
                            <td className={classes.actions}>
                                <button onClick={() => deleteProduct(prod.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}