import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styled from "styled-components";

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
  background-color: #eeeeee;
  padding: 20px 20px;
`;

const BasketSumText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0px;
  font-size: 1.2rem;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  font-size: 1.3rem;
  font-weight: 800;
`;

const Basket = () => {
  const [basketItemArray, setBasketItemArray] = useState(null);
  const [basketItemPriceSum, setBasketItemPriceSum] = useState(null);
  const [deliveryPrice, setDeliveryPrice] = useState(null);
  const [basketItemQuantity, setBasketItemQuantity] = useState(null);
  const [reRendering, setRerendering] =useState(true)

  useEffect(() => {
    let basketItem = JSON.parse(localStorage.getItem("basketItem"));
    console.log(basketItem);
    let sum = [];

    if (basketItem != null) {
      setBasketItemArray(basketItem);
      basketItem.forEach((item) => {
        sum.push(Number(item.price));
      });

      setBasketItemPriceSum(
        sum.reduce((a, b) => {
          return a + b;
        }, 0)
      );
      setDeliveryPrice(basketItem.length * 1000);
      setBasketItemQuantity(basketItem.length);
    }
  }, [reRendering]);

  const removeBasketItem = (e)=>{
    let basketItems = JSON.parse(localStorage.getItem("basketItem"));
    const newBasketItems = basketItems.filter(item => item.id !== Number(e.target.value))

    localStorage.setItem('basketItem', JSON.stringify(newBasketItems))
    setBasketItemArray(newBasketItems)
    setRerendering(!reRendering)
  }

  return (
    <Container style={{ position: "relative" }}>
      <Row>
        <p style={{ fontSize: "2rem", fontWeight: "900" }}>장바구니</p>
      </Row>
      {basketItemArray &&
        basketItemArray.map((item) => {
          return (
            <Row key={item.id} className="mt-4">
              <Col xs={3}>
                <img src={item.imgUrl} alt="" width={100} />
              </Col>
              <Col
                xs={8}
                className="d-flex flex-column justify-content-between"
                style={{ textAlign: "left", padding: "5px" }}
              >
                <div style={{ fontWeight: "900", fontSize: "1.3rem" }}>
                  {item.name}
                </div>
                <div>{item.price}</div>
              </Col>
              <Col xs={1}>
                <CloseButton value={item.id} onClick={removeBasketItem}>x</CloseButton>
              </Col>
            </Row>
          );
        })}

      <BasketPriceSum>
        <BasketSumText>
          <span>상품 금액({basketItemQuantity}개)</span>
          <span>{basketItemPriceSum}</span>
        </BasketSumText>
        <BasketSumText>
          <span>배송비</span>
          <span>{deliveryPrice}</span>
        </BasketSumText>
        <BasketSumText>
          <span>총 주문금액</span>
          <span>{basketItemPriceSum + deliveryPrice}</span>
        </BasketSumText>
      </BasketPriceSum>
      <BuyItem>구매하기</BuyItem>
    </Container>
  );
};

export default Basket;
