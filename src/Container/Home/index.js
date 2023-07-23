import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import { Container, Image, ContainerItens, InputLabel, Input } from './styles'
import Burger from '../../assets/burger.png'

import H1 from '../../Components/Title'
import Button from '../../Components/Button'

function App() {

  const [orders, setOrders] = useState([])
  const history = useHistory()
  const inputOrder = useRef()
  const inputName = useRef()

  async function AddNewOrder() {

    const { data: newOrder } = await axios.post('http://localhost:3001/orders', {
      order: inputOrder.current.value,
      clientName: inputName.current.value,
    })

    setOrders([...orders, newOrder])

    history.push('/orders')

  }

  return (
    <Container>
      <Image src={Burger} />
      <ContainerItens>
        <H1>Faça seu pedido!</H1>
        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder='1 Coca-Cola, 1 X-Salada' />
        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder='Nathan' />
        <Button onClick={AddNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  )

}

export default App