import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import data from "../data/data.json";
import styled from "styled-components";
import ProductDetailContent from "../components/ProductDetailContent";
import ProductDetailReview from "../components/ProductDetailReview";

const DetailDiv = styled.div`
  text-align: left;
  font-size: 1.2rem;
`;

const DetailButton = styled.button`
  width: 100%;
  margin: 0;
  border: none;
  font-size: 1.4rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0px;
`;

const AddBasket = styled.button`
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

const ProductDetail = () => {
  const param = useParams();
  const [product, setProduct] = useState();
  const [detailTap, setDetailTap] = useState(true);
  const [basket, setBasket] = useState([])

  useEffect(() => {
    let detail = data.filter((item) => item.id === Number(param.productid));
    setProduct(...detail);
  }, []);

  const addBasketItem = async()=>{
     const item = {
        id : product.id,
        name : product.name,
        price : product.price,
        imgUrl : product.imgUrl
    }
    let getBasketItem = localStorage.getItem('basketItem')
    if(getBasketItem == null){
        localStorage.setItem('basketItem', JSON.stringify([item]));
        alert('장바구니 추가 완료')
    }else{
       let newItem =JSON.parse(localStorage.getItem('basketItem'));
        newItem.push(item);
        localStorage.setItem('basketItem', JSON.stringify(newItem));
        alert('장바구니 추가 완료')
    }


   
    // 

  

  }

  return (
    <Container style={{ position: "relative" }}>
      {product && (
        <Container>
          <Card style={{ border: "none" }}>
            <Card.Img src={product.imgUrl} />
            <Card.Body>
              <DetailDiv style={{ fontWeight: "900" }}>
                {product.name}
              </DetailDiv>
              <DetailDiv>{product.price}원</DetailDiv>
            </Card.Body>
          </Card>
          <Row className="shadow-sm" style={{ margin: "30px 0px" }}>
            <Col>
              <DetailButton
                onClick={() => {
                  setDetailTap(true);
                }}
              >
                상품 설명
              </DetailButton>
            </Col>
            <Col>
              <DetailButton
                onClick={() => {
                  setDetailTap(false);
                }}
              >
                상품 후기
              </DetailButton>
            </Col>
          </Row>
          <Row>
            {detailTap == true ? (
              <ProductDetailContent product={product} />
            ) : (
              <ProductDetailReview product={product} />
            )}
          </Row>
        </Container>
      )}

      <AddBasket onClick={addBasketItem} className="me-auto">장바구니 담기</AddBasket>
    </Container>
  );
};

export default ProductDetail;
