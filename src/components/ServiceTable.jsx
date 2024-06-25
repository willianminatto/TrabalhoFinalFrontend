import { useEffect, useState } from 'react'
import classes from './tables.module.css'

export default function ServiceTable() {
    const [serviceList, setServiceList] = useState([])

    const reqServiceList = async () => {
        try {
            const response = await fetch('http://localhost:3000/servicos', {
                method: 'GET',
            });
            const data = await response.json();
            setServiceList(data);
            console.log(data);
        } catch (error) {
            console.error('Ocorreu um erro na requisição:', error);
        }
    };

    const deleteService = async (id) => {
        await fetch(`http://localhost:3000/servicos/${id}`, {
            method: 'DELETE'
        }).then(() => {
            reqServiceList()
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
        reqServiceList()
    }, [])


    return (
        <div className={classes.table_container}>
            <h2>Lista de Serviços</h2>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <th>Cod</th>
                        <th>Descrição</th>
                        <th>Preço</th>
                        <th>Tempo estimado (min)</th>
                        <th>Tipo Seviço</th>
                        <th>Prestador</th>
                        <th style={{ textAlign: 'center' }}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceList.map((service) => (
                        <tr key={service.id}>
                            <td>{service.id}</td>
                            <td>{service.description}</td>
                            <td>{currencyFormatter(service.price)}</td>
                            <td>{numberFormatter(service.time)}</td>
                            <td>{service.typeservice}</td>
                            <td>{service.prestador}</td>
                            <td className={classes.actions}>
                                <button onClick={() => deleteService(service.id)}>Editar</button>
                                <button onClick={() => deleteService(service.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}