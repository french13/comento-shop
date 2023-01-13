import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate()

  const [productCard, setProductCard] =useState();

  useEffect(()=>{
    setProductCard(data)
  },[])
  
  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        {productCard &&
          productCard.map((item) => {
            return (
              <Col key={item.id} >
              <Card style={{margin : '10px'}} >
                <Card.Img onClick={()=>{navigate(`/product/${item.id}`)}} variant="top" src={item.imgUrl} height="300px" style={{ objectFit: 'cover' }}/>
                <Card.Body>
                  <Card.Title style={{fontWeight : '900'}}>{item.name}</Card.Title>
                  <Card.Text>{item.content}</Card.Text>
                </Card.Body>
              </Card>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default ProductCard;
