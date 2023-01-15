import React, { useEffect, useState, useRef } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ProductDetailContent from "../components/ProductDetailContent";
import ProductDetailReview from "../components/ProductDetailReview";
import { mockTheme1Produdcts, mockTheme2Produdcts } from "../data/mockData";
import { basketRender } from "../store";

const DetailDiv = styled.div`
  text-align: left;
  font-size: 1.2rem;
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
  const dispatch = useDispatch()

  const detailTapTextRef = useRef();
  const detailTapReviewRef = useRef();

  useEffect(() => {
    const data = [...mockTheme1Produdcts, ...mockTheme2Produdcts];
    let detail = data.filter((item) => item.id === Number(param.productid));
    setProduct(...detail);
  }, []);

  // localStorage를 이용한 장바구니 아이템 추가 기능
  const addBasketItem = () => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      thumbnail: product.thumbnail,
    };
    let getBasketItem = localStorage.getItem("basketItem");
    if (getBasketItem == null) {
      localStorage.setItem("basketItem", JSON.stringify([item]));
      alert("장바구니 추가 완료");
    } else {
      let newItem = JSON.parse(localStorage.getItem("basketItem"));
      newItem.push(item);
      localStorage.setItem("basketItem", JSON.stringify(newItem));
      alert("장바구니 추가 완료");
    }
    dispatch(basketRender(1))
  };

  const detailProductText = (e) => {
    setDetailTap(true);
    detailTapReviewRef.current.className = "detailTap";
    e.target.className = "detailTapEffect";
  };
  const detailProductReview = (e) => {
    setDetailTap(false);
    detailTapTextRef.current.className = "detailTap";
    e.target.className = "detailTapEffect";
  };

  return (
    <Container style={{ position: "relative", paddingBottom: "80px" }}>
      {product && (
        <Container>
          <Card style={{ border: "none" }}>
            <Card.Img src={product.thumbnail} />
            <Card.Body>
              <DetailDiv style={{ fontWeight: "900" }}>
                {product.name}
              </DetailDiv>
              <DetailDiv>{product.price}원</DetailDiv>
            </Card.Body>
          </Card>
          <Row className="shadow-sm" style={{ margin: "30px 0px" }}>
            <Col>
              <button
                className="detailTapEffect"
                ref={detailTapTextRef}
                onClick={detailProductText}
              >
                상품 설명
              </button>
            </Col>
            <Col>
              <button
                className="detailTap"
                ref={detailTapReviewRef}
                onClick={detailProductReview}
              >
                상품 후기
              </button>
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

      <AddBasket onClick={addBasketItem} className="me-auto">
        장바구니 담기
      </AddBasket>
    </Container>
  );
};

export default ProductDetail;
