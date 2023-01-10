import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import data from "../data/data.json";
import { useNavigate } from "react-router-dom";

const ProductCard = () => {
  const navigate = useNavigate()

  console.log(data);
  return (
    <Container>
      <Row xs={1} md={2} lg={3}>
        {data &&
          data.map((item) => {
            return (
              <Col key={item.id} >
              <Card style={{margin : '10px'}} >
                <Card.Img onClick={()=>{}} variant="top" src={item.imgUrl} height="300px" style={{ objectFit: 'cover' }}/>
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
