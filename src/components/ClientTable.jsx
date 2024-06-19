import { useEffect, useState } from 'react'
import classes from './ProductTable.module.css'

export default function ClientTable() {
    const [clientList, setClientList] = useState([])



    const reqClientList = async () => {
        try {
            const response = await fetch('http://localhost:3000/cliente', {
                method: 'GET',
            });
            const data = await response.json();
            setClientList(data);
            console.log(data);
        } catch (error) {
            console.error('Ocorreu um erro na requisição:', error);
        }
    };

    const deleteClient = async (id) => {
        await fetch(`http://localhost:3000/cliente/${id}`, {
            method: 'DELETE'
        })
    }

    useEffect(() => {
        reqClientList()
    }, [])

    return (
        <div className={classes.table_container}>
            <h2>Lista de Clientes</h2>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Contato</th>
                        <th>Cidade</th>
                        <th style={{ textAlign: 'center' }}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {clientList.map((client) => (
                        <tr key={client.id}>
                            <td>{client.id}</td>
                            <td>{client.name}</td>
                            <td>{client.CPF}</td>
                            <td>{client.contact}</td>
                            <td>{client.adress}</td>
                            <td className={classes.actions}>
                                <button onClick={() => deleteClient(client.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}