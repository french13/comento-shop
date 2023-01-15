import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ products, setProducts }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        {products &&
          products.map((item) => {
            return (
              <Col key={item.id}>
                <Card className="productCard" style={{ margin: "10px" }}>
                  <Card.Img className="productCard__img"
                    onClick={() => {
                      navigate(`/product/${item.id}`);
                    }}
                    variant="top"
                    src={item.thumbnail}
                    height="300px"
                    style={{ objectFit: "cover" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: "900" }}>
                      {item.name}
                    </Card.Title>
                    <Card.Text>{item.description}</Card.Text>
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
