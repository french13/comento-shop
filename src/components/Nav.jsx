import { Button } from 'react-bootstrap'
import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
background-color : red;
`

const Nav = () => {
  return (
    <div>
<StyledButton>bootstrap설치 됨?</StyledButton>
    </div>
  )
}

export default Nav