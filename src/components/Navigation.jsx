import React from "react";
import {Row, Col, Button, Navbar as NavbarBs } from "react-bootstrap";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

const MainTItle = styled.div`
  font-size: 28px;
  font-weight: 600;
`;



const Navigation = () => {
  const navigate =useNavigate()

  return (
    <NavbarBs sticky='top' className="shadow-sm p-3 mb-5 bg-white">
      <Row className="w-100">
        <Col>
        </Col>
        <Col>
          <MainTItle onClick={()=>{navigate('/')}}>코멘토 쇼핑</MainTItle>
        </Col>
        <Col>
          <Button style={{position : 'relative'}} variant="outline-primary" className="rounded-circle">
           <i onClick={()=>{navigate('/basket')}} className="ri-shopping-basket-fill"></i>
          </Button>
        </Col>
      </Row>
    </NavbarBs>
  );
};

export default Navigation;
