import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { basketRender, basketReset } from "../store";

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

const BuyConfirmModal = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  left: 25%;
  top: 40%;
  background-color: white;
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.8);
`;

const Basket = () => {
  const [basketItemArray, setBasketItemArray] = useState(null);
  const [basketItemPriceSum, setBasketItemPriceSum] = useState(null);
  const [deliveryPrice, setDeliveryPrice] = useState(null);
  const [basketItemQuantity, setBasketItemQuantity] = useState(null);
  const [reRendering, setRerendering] = useState(true);
  const [buyButton, setBuyButton] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  useEffect(() => {
    let basketItem = JSON.parse(localStorage.getItem("basketItem"));
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

  const removeBasketItem = (e) => {
    let basketItems = JSON.parse(localStorage.getItem("basketItem"));
    const newBasketItems = basketItems.filter(
      (item) => item.id !== Number(e.target.value)
    );

    localStorage.setItem("basketItem", JSON.stringify(newBasketItems));
    setBasketItemArray(newBasketItems);
    setRerendering(!reRendering);
    dispatch(basketRender(-1))

  };

  const confirm = () => {
    localStorage.removeItem("basketItem");
    navigate("/");
    dispatch(basketReset())
  };

  return (
    <Container style={{ position: "relative" }}>
      {buyButton ? (
        <BuyConfirmModal>
          <div
            style={{ height: "50%", fontSize: "1.5rem", padding: "40px 0px" }}
          >
            ?????????????????????.
          </div>
          <div>
            <Button onClick={confirm} style={{ width: "50%", height: "70px" }}>
              ??????
            </Button>
          </div>
        </BuyConfirmModal>
      ) : null}
      <Row>
        <p style={{ fontSize: "2rem", fontWeight: "900" }}>????????????</p>
      </Row>
      {basketItemArray &&
        basketItemArray.map((item) => {
          return (
            <Row key={item.id} className="mt-4">
              <Col xs={3}>
                <img src={item.thumbnail} alt="" width={100} />
              </Col>
              <Col
                xs={8}
                className="d-flex flex-column justify-content-between"
                style={{ textAlign: "left", padding: "5px" }}
              >
                <div className="basketItem__name">
                  {item.name}
                </div>
                <div>{item.price}</div>
              </Col>
              <Col xs={1}>
                <CloseButton value={item.id} onClick={removeBasketItem}>
                  x
                </CloseButton>
              </Col>
            </Row>
          );
        })}

      <BasketPriceSum>
        <BasketSumText>
          <span>?????? ??????({basketItemQuantity}???)</span>
          <span>{basketItemPriceSum}</span>
        </BasketSumText>
        <BasketSumText>
          <span>?????????</span>
          <span>{deliveryPrice}</span>
        </BasketSumText>
        <BasketSumText>
          <span>??? ????????????</span>
          <span>{basketItemPriceSum + deliveryPrice}</span>
        </BasketSumText>
      </BasketPriceSum>
      <BuyItem
        onClick={() => {
          setBuyButton(true);
        }}
      >
        ????????????
      </BuyItem>
    </Container>
  );
};

export default Basket;
