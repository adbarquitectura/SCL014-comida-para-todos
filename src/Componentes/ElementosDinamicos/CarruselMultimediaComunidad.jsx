import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

import NextIcon from '../Iconos/NextIcon';
import PrevIcon from '../Iconos/PrevIcon';

import imgcarrusel1 from "../../img/imgcarrusel1.png";
import imgcarrusel2 from "../../img/images.jpg";
import './CarruselMultimediaComunidad.css';


const CarruselMultimediaComunidad = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="boxCarruselComunidad">
      <div className="boxTituloCarrusel">
        <div className="viñetaYellow"></div>
        <h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2>
      </div>

      <div className="boxContenedorCarruselComunidad">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          prevIcon={<PrevIcon />}
          nextIcon={<NextIcon />}
        >
          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <img
                    className="boxImagenCarruselAlianzas"
                    src={imgcarrusel1}
                    alt="First slide"
                  />
                </Col>

                <Col>
                  <div className="boxTextoCarruselAlianzas">
                    <h3>Jorge Lopez</h3>
                    <h4>Dueño Boa Restaurant</h4>
                    <p>Como restaurant, estamos muy contentos de unirnos a esta causa y poder colaborar con platos de comida ricos y de calidad, cocinados por nuestros propios chefs y con mucho cariño para las comunidades.</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          <Carousel.Item>
            <Container>
              <Row>
                <Col>
                  <img
                    className="boxImagenCarruselAlianzas"
                    src={imgcarrusel2}
                    alt="First slide"
                  />
                </Col>

                <Col>
                  <div className="boxTextoCarruselAlianzas">
                    <h3>Jorge Lopez</h3>
                    <h4>Dueño Boa Restaurant</h4>
                    <p>Como restaurant, estamos muy contentos de unirnos a esta causa y poder colaborar con platos de comida ricos y de calidad, cocinados por nuestros propios chefs y con mucho cariño para las comunidades.</p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

        </Carousel>
      </div>


    </div >
  );
};

export default CarruselMultimediaComunidad;