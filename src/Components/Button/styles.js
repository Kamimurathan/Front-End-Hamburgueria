import styled from 'styled-components'

export const Button = styled.button`

width: 342px;
height: 68px;
background: ${ props => props.isBack ? 'rgba(255, 255, 255, 0.25)' : 'rgba(217, 56, 86, 1)'};
color: #FFFFFF;
font-size: 16px;
font-style: normal;
font-weight: bold;
margin-top: 80px;
border: none;
cursor: pointer;

&:hover{
    opacity: .8;
}

&:active{
    opacity: .4;
}

`