/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "./TarjetasConImagenes.css";
import restaurant from "../../img/99-restaurant.png";
import boa from "../../img/Boa.png";
import chimba from "../../img/lachimba.jpg";
import cava from "../../img/CAVA_DEL_SOMMELIER.jpg";

import './Alianzas.css';
import { Carousel } from 'react-bootstrap';
import imgPrevIcon from '../../img/previoIcon.png';
import imgNextIcon from '../../img/nextIcon.png';

import { Col, Container, Row } from 'react-bootstrap';
// Data imagenes de carrusel
const alianzasData = [
  restaurant,
  boa,
  chimba,
  cava
];
//Commponente Icon Next Carrusel
const PrevIcon = () => {
  return (
    <img src={imgPrevIcon} />
  )
};
//Commponente Icon Prev  Carrusel
const NextIcon = () => {
  return (
    <img src={imgNextIcon} />
  )
};

const Alianzas = () => {
  const [arregloAlianza, setArregloAlianza] = useState(alianzasData);

  const [index, setIndex] = useState(0);

  //funcion mueve arreglo e identifica sentido de carrusel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    if (e !== undefined) {
      if (e.currentTarget.className === "carousel-control-next") {
        actualizarAlianzasRenderizadasAdelante();
        console.log('mover arreglo adelante')
      }
      else if (e.currentTarget.className === "carousel-control-prev") {
        actualizarAlianzasRenderizadasAtras();
        console.log('mover arreglo atras')
      }
    }
    else {
      console.log('mover arreglo adelante')
      actualizarAlianzasRenderizadasAdelante();
    }
  };

  // funcion actualiza posiciones de elementos en arreglo de Data Alianza adelante 
  const actualizarAlianzasRenderizadasAdelante = () => {
    arregloAlianza.push(arregloAlianza.shift());
    setArregloAlianza([...arregloAlianza]);
  };
  // funcion actualiza posiciones de elementos en arreglo de Data Alianza atrás
  const actualizarAlianzasRenderizadasAtras = () => {
    arregloAlianza.unshift(arregloAlianza.pop());
    setArregloAlianza([...arregloAlianza]);
  };

  return (
    <div>
      <div className="fotoAlianzas">
        {
          arregloAlianza.map((aliado, idx) => {
            return (
              <img src={aliado} key={idx} />
            )
          })
        }
      </div>
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
                  src={restaurant}
                  alt="First slide"
                />
              </Col>

              <Col>
                <div>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                  src={boa}
                  alt="First slide"
                />
              </Col>

              <Col>
                <div>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                  src={chimba}
                  alt="First slide"
                />
              </Col>

              <Col>
                <div>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                  src={cava}
                  alt="First slide"
                />
              </Col>

              <Col>
                <div>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </Carousel.Item>

      </Carousel>
    </div>

  );


};

export default Alianzas;

/* return (
  <div>
    Nuestras Alianzas
    <div className="fotoAlianzas">
      <img src={restaurant} />
      <img src={boa} />
      <img src={chimba} />
      <img src={cava} />

      <p>
        Como restaurantes, estamos muy contentos de unirnos a esta causa y
        poder colaborar con platos de comida ricos y de calidad, cocinados por
        nustros propios chefs y con mucho cariño para las comunidades.
      </p>
    </div>



  </div>
); */