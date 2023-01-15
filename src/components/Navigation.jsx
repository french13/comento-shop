import React, {useEffect, useState} from "react";
import {
  Row,
  Col,
  Button,
  Container,
  Navbar as NavbarBs,
} from "react-bootstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainTItle = styled.div`
  font-size: 28px;
  font-weight: 600;
  display : flex;
  justify-content : center;
  align-items : center;
  cursor : pointer;
  @media (max-width : 430px) {
    font-size : 25px
  }
`;

const BasketQuantity = styled.div`
background-color : red;
position : absolute;
width : 25px;
height : 25px;
display : flex;
justify-content : center;
align-items : center;
bottom : -5px;
right : 3px;
border-radius : 50%;
color : white;
`

const Navigation = () => {
  const navigate = useNavigate();
  const basket = useSelector((state)=>{return state.basket})

  
  const [basketQuantity, setBasketQuantity] = useState(0)

  useEffect(()=>{
    setBasketQuantity(basket)
  },[basket])



  



  return (
    <NavbarBs sticky="top" className="shadow-sm p-3 mb-5 bg-white">
      <Container>
        <Row className="w-100">
          <Col xs="2"
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
            }}
          >
            <i style={{ cursor : "pointer"}}
              onClick={() => {
                navigate(-1);
              }}
              className="ri-arrow-left-s-line fs-2"
            ></i>
          </Col>
          <Col xs="8">
            <MainTItle
              onClick={() => {
                navigate("/");
              }}
            >
              코멘토 쇼핑
            </MainTItle>
          </Col>
          <Col xs="2"
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              position : 'relative'
            }}
          >
            <Button
              style={{ position: "relative" }}
              variant="outline-primary"
              className="rounded-circle"
              onClick={()=>{   navigate("/basket");}}
            >
              <i
                onClick={() => {
                  navigate("/basket");
                }}
                className="ri-shopping-basket-fill"
              ></i>
            </Button>
            <BasketQuantity>{basketQuantity}</BasketQuantity>
          </Col>
        </Row>
      </Container>
    </NavbarBs>
  );
};

export default Navigation;
