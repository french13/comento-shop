import React from 'react'
import {Container, Button } from 'react-bootstrap'
import styled from 'styled-components'
import { mockTheme1Produdcts, mockTheme2Produdcts } from '../data/mockData'

const Themebutton = styled.button`
margin-right : 15px;
border : none;
padding : 25px 10px;
font-size : 1.5rem;
border-radius : 5px;
background-color : grey;
color : white;
`

const ThemeButton = ({products, setProducts}) => {



  return (
    <Container className='d-flex ' style={{padding : '15px'}}>
      <Themebutton onClick={()=>{setProducts(mockTheme2Produdcts)}} ># 겨울 방한템</Themebutton>
      <Themebutton onClick={()=>{setProducts(mockTheme1Produdcts)}} ># 따순머그컵</Themebutton>
        
   
    </Container>
  )
}

export default ThemeButton