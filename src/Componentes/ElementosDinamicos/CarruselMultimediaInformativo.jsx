import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

import NextIcon from '../Iconos/NextIcon';
import PrevIcon from '../Iconos/PrevIcon';

import imgcarrusel1 from "../../img/imgcarrusel1.png";
import imgcarrusel2 from "../../img/images.jpg";
import './CarruselMultimediaInformativo.css';


const CarruselMultimediaInformativo = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="boxCarrusel">
      <div className="boxTituloCarrusel">
        <div className="viñetaYellow"></div>
        <h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2>
      </div>

      <div className="boxContenedorCarrusel">
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
                    className="boxImagenCarrusel"
                    src={imgcarrusel1}
                    alt="First slide"
                  />
                </Col>

                <Col>
                  <div className="boxTextoCarrusel">
                    <h3>3 millones de chilenos padecen Inseguridad Alimentaria moderada o severa</h3>
                    <p>El Programa Mundial de Alimentos de las Naciones Unidas (PMA), advirtió recientemente que estamos al borde de una pandemia alimentaria.La inseguridad alimentaria aguda aumentará a 265 millones en 2020 en Latinoamérica, duplicando las cifras del 2019. (PMA, 2020)</p>
                    <a href='https://www.un.org/sustainabledevelopment/es/hunger/' target='_blank'>Objetivos de Desarrollo Sostenible</a>
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
                    className="boxImagenCarrusel"
                    src={imgcarrusel2}
                    alt="First slide"
                  />
                </Col>

                <Col>
                  <div className="boxTextoCarrusel">
                    <h3>3 millones de chilenos padecen Inseguridad Alimentaria moderada o severa</h3>
                    <p>El Programa Mundial de Alimentos de las Naciones Unidas (PMA), advirtió recientemente que estamos al borde de una pandemia alimentaria.La inseguridad alimentaria aguda aumentará a 265 millones en 2020 en Latinoamérica, duplicando las cifras del 2019. (PMA, 2020)</p>
                    <a href='https://www.un.org/sustainabledevelopment/es/hunger/' target='_blank'>Objetivos de Desarrollo Sostenible</a>
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

export default CarruselMultimediaInformativo;
