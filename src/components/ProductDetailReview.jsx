import React, {useState} from 'react'
import { mockReviews } from '../data/mockData'
import { Card, Container,Row, Col } from 'react-bootstrap'
import styled from 'styled-components'

const ScoreDiv = styled.div`
color : rgb(201, 201, 0);
font-size : 1.6rem;
text-align : left;
height : 50%;
`

const NameDateDiv = styled.div`
color : grey;
text-align : left;
height : 50%;
font-size : 1.4rem;
`





const ProductDetailReview = () => {
  const [mockReviewItems, setMockReviewItems] =useState(mockReviews)


  return (
   <>
      {
        mockReviewItems.map((item)=>{
          return (
            
            <Card id={item.id} style={{marginBottom : '16px', padding : '30px', border : "none"}}>
              <Container>
                <Row>
                  <Col xs={2}><Card.Img src={item.profileImage} style={{ borderRadius : "30px"}}/></Col>
                  <Col xs={10}>
                    <ScoreDiv>{item.score}</ScoreDiv>
                    <NameDateDiv>
                      <span style={{marginRight : '10px'}}>{item.username}</span>
                      <span>{item.createdDate}</span>
                    </NameDateDiv>
                  </Col>
                </Row>
                <Row style={{fontSize : '1.4rem', padding : '0px 10px', fontWeight : '900', marginTop : '20px'}}>{item.reviewText}</Row>
              </Container>
              
            </Card>
          )
        })
      }
    
    </>
  )
}

export default ProductDetailReview