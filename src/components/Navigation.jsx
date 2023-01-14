import React from "react";
import {Row, Col, Button, Container, Navbar as NavbarBs } from "react-bootstrap";
import styled from "styled-components";
import {useNavigate, useParams} from "react-router-dom";

const MainTItle = styled.div`
  font-size: 28px;
  font-weight: 600;
`;



const Navigation = () => {
  const navigate =useNavigate()
  const mainUrl = process.env.PUBLIC_URL
  const currentUrl = window.location.href

  let param = useParams()




  return (
    <NavbarBs sticky='top' className="shadow-sm p-3 mb-5 bg-white">
      <Container>
      <Row className="w-100">
        <Col style={{display : 'flex', justifyContent : 'left', alignItems : 'center'}}>
          {
            mainUrl == currentUrl?
              null :
              <i onClick={()=>{navigate(-1)}} className="ri-arrow-left-s-line fs-2"></i>
          }
    
        </Col>
        <Col>
          <MainTItle onClick={()=>{navigate('/')}}>코멘토 쇼핑</MainTItle>
        </Col>
        <Col style={{display : 'flex', justifyContent : 'right', alignItems : 'center'}}>
          <Button style={{position : 'relative'}} variant="outline-primary" className="rounded-circle">
           <i onClick={()=>{navigate('/basket')}} className="ri-shopping-basket-fill"></i>
          </Button>
        </Col>
      </Row>
      </Container>
    </NavbarBs>
  );
};

export default Navigation;
