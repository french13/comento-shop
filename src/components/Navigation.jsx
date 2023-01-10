import React from "react";
import {Row, Col, Button, Navbar as NavbarBs } from "react-bootstrap";
import styled from "styled-components";
import { NavLink, useNavigate, useParams } from "react-router-dom";

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
          <Button variant="outline-primary" className="rounded-circle">
            <NavLink to='/basket'><i className="ri-shopping-basket-fill"></i></NavLink>
          </Button>
        </Col>
      </Row>
    </NavbarBs>
  );
};

export default Navigation;
