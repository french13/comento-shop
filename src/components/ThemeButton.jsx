import React from 'react'
import {Container } from 'react-bootstrap'
import styled from 'styled-components'

const Themebutton = styled.button`
margin-right : 15px;
border : none;
padding : 25px 10px;
font-size : 1.5rem;
border-radius : 5px;
background-color : grey;
color : white;
`

const ThemeButton = () => {
  return (
    <Container className='d-flex ' style={{padding : '15px'}}>
        <Themebutton># 겨울 방한템</Themebutton>
        <Themebutton># 따순머그컵</Themebutton>
    </Container>
  )
}

export default ThemeButton