import styled from 'styled-components'

export const Container = styled.div`

background-color: black;
display: flex;
flex-direction: column;
align-items: center;
height: 100%;
min-height: 100vh;
padding-bottom: 80px;

`

export const Image = styled.img`

display: block;
margin: 10px auto 0;

`

export const ContainerItens = styled.div`
`

export const Order = styled.div`

margin-top: 20px;
width: 342px;
background: rgba(255, 255, 255, 0.25);
color: #FFFFFF;
font-size: 18px;
font-style: normal;
font-weight: normal;
padding: 25px;
border: none;
border-radius: 14px;
outline: none;
display: flex;
justify-content: space-between;

.caixa {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover{
    opacity: .8;
}

    &:active{
    opacity: .4;
}

}

`