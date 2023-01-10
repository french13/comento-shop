import React, { useEffect, useState } from 'react'
import { Card, Container,Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import data from '../data/data.json'
import styled from 'styled-components'

const DetailDiv = styled.div`
text-align : left;
font-size : 1.2rem;
`

const DetailButton = styled.button`
width : 100%;
margin : 0;
border : none;
background : none;
font-size : 1.4rem;
font-weight : 900;
`

const ProductDetail = () => {
    const param = useParams()
    const [product, setProduct] =useState()

    useEffect(()=>{
     let detail = data.filter(item=> item.id === Number(param.productid))
      setProduct(...detail)
    }, [])

  return (
    <div>
        {
            product &&
            <Container>
            <Card>
                <Card.Img src={product.imgUrl}/>
                <Card.Body>
                    <DetailDiv style={{fontWeight : '900'}}>{product.name}</DetailDiv>
                    <DetailDiv>{product.price}</DetailDiv>
                </Card.Body>
            </Card>
            <Row style={{margin : '30px 0px'}}>
            <Col><DetailButton>상품 설명</DetailButton></Col>
            <Col><DetailButton>상품 후기</DetailButton></Col>
            </Row>
            <Row>

            </Row>
            </Container>
        }
    </div>
  )
}

export default ProductDetail