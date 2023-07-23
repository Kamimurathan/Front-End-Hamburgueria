import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Container, Image, ContainerItens, Order } from './styles'
import Burger1 from '../../assets/burger1.png'
import Trash from '../../assets/trash.png'

import H1 from '../../Components/Title'
import Button from '../../Components/Button'

function Orders() {

    const [orders, setOrders] = useState([])
    const history = useHistory()

    useEffect(() => {

        async function fetchOrders() {

            const { data: newOrders } = await axios.get(`http://localhost:3001/orders`)

            setOrders(newOrders)

        }

        fetchOrders()

    }, [])

    async function deleteOrder(orderId) {

        await axios.delete(`http://localhost:3001/orders/${orderId}`)

        const newOrders = orders.filter(order => order.id !== orderId)

        setOrders(newOrders)

    }

    function GoBackHome() {

        history.push('/')

    }

    return (
        <Container>
            <Image src={Burger1} />
            <ContainerItens>
                <H1>Pedidos</H1>

                <div>
                    {orders.map((order) => (
                        <Order key={order.id}>
                            <div className='caixa'>
                                <p>{order.order}</p> <p>{order.clientName}</p>
                            </div>
                            <button onClick={() => deleteOrder(order.id)}>
                                <img src={Trash} alt="lata-de-lixo" />
                            </button>
                        </Order>
                    ))}
                </div>

                <Button isBack={true}onClick={GoBackHome}>Voltar</Button>
            </ContainerItens>
        </Container >
    )

}

export default Orders