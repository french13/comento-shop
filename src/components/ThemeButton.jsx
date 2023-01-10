import React from 'react'
import {Container } from 'react-bootstrap'
import styled from 'styled-components'
import theme from '../data/themes.json'

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
  let themeArray = theme.themes
  return (
    <Container className='d-flex ' style={{padding : '15px'}}>
      {
        themeArray &&
        themeArray.map((item)=>{
          return (
            <Themebutton key={item.id}>#{item.name}</Themebutton>
          )
        })
      }
        
   
    </Container>
  )
}

export default ThemeButton