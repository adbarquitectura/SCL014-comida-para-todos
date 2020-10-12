import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';


const ItemCarrusel = (props) => {
  
  return (
       
        <Carousel.Item>
          <Container>
            <Row>
              <Col>
                <img
                  src={props.imgCarrusel}
                  alt="First slide"
                />
              </Col>

              <Col>
                <div>
                  <h3>{props.tituloSlideCarrusel}</h3>
                  <p>{props.contenidoSlideCarrusel}</p>
                  <a href={props.urlSlide}>{props.tituloEnlace}</a>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

  )
};

export default ItemCarrusel;