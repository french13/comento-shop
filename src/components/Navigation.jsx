import React from "react";
import {Row, Col, Button, Navbar as NavbarBs } from "react-bootstrap";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const MainTItle = styled.div`
  font-size: 28px;
  font-weight: 600;
`;

const Navigation = () => {
  return (
    <NavbarBs sticky='top' className="shadow-sm p-3 mb-5 bg-white rounded">
      <Row className="w-100">
        <Col></Col>
        <Col>
          <MainTItle>코멘토 쇼핑</MainTItle>
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
