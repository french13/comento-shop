import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components';

const BuyItem = styled.button`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 70px;
  border: none;
  background-color: #24dbaf;
  font-size: 1.5rem;
  font-weight: 900;
`;

const Basket = () => {
  return (
    <Container style={{ position: "relative" }}>


    <BuyItem className="me-auto">구매하기</BuyItem>
  </Container>
  )
}

export default Basket