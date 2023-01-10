import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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

const BasketPriceSum = styled.div`
width: 100%;
position: fixed;
bottom: 70px;
left: 0;
background-color : #EEEEEE;
padding : 20px 20px;
`

const BasketSumText = styled.div`
display : flex;
justify-content : space-between;
align-items : center;
margin : 10px 0px;
font-size : 1.2rem;
`

const Basket = () => {
  return (
    <Container style={{ position: "relative" }}>
      <Row>
        <p>장바구니</p>
      </Row>
      <Row>
        <Col xs={3}>사진</Col>
        <Col xs={8}>
          <div>이름</div>
          <div>가격</div>
        </Col>
        <Col xs={1}>취소</Col>
      </Row>

    <BasketPriceSum>
      <BasketSumText>
        <span>상품 금액(2개)</span>
        <span>50,000</span>
        </BasketSumText>
      <BasketSumText>
      <span>배송비</span>
      <span>3,000</span>
        </BasketSumText>
      <BasketSumText>
      <span>총 주문금액</span>
      <span>53,000</span>
        </BasketSumText>
    </BasketPriceSum>
    <BuyItem className="me-auto">구매하기</BuyItem>
  </Container>
  )
}

export default Basket