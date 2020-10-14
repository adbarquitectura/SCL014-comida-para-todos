import React, { useState } from "react";
import './Alianzas.css';
import { Carousel } from 'react-bootstrap';

import { Col, Container, Row } from 'react-bootstrap';
import BotonGeneral from '../Botones/BotonGeneral';
import PrevIcon from "../Iconos/PrevIcon";
import NextIcon from "../Iconos/NextIcon";
import quoteIcon from '../../img/quote icon.png';


import restaurant from "../../img/99-restaurant.png";
import boa from "../../img/Boa.png";
import chimba from "../../img/lachimba.jpg";
import cava from "../../img/CAVA_DEL_SOMMELIER.jpg";
import BotonLink from "../Botones/BotonLink";

import restaurant1 from "../../img/99-restaurant.png";
import boa1 from "../../img/Boa.png";
import chimba1 from "../../img/lachimba.jpg";
import cava1 from "../../img/CAVA_DEL_SOMMELIER.jpg";



// Data imagenes de carrusel
const alianzasData = [
  restaurant,
  boa,
  chimba,
  cava
];

const Alianzas = (props) => {
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
    <div className="boxCarruselAlianzas">
      <div className="boxTituloCarruselAlianzas">
        <div className="viñetaYellow"></div>
        <a name={props.contenidoInfo}><h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2></a>
      </div>

      <div className="boxBotonAlianzas">
        < BotonLink
          contenidobtn={'Aporta como Restaurant'}
          enlaceLinkTo={"/comoAportar"}
          anclaLinkTo={'#¿Cómo aportar si eres un Restaurant?'}
        />
      </div>

      <div>
        <Container>
          <Row>
            <Col>
              <div className="fotoAlianzas">
                {
                  arregloAlianza.map((aliado, idx) => {
                    return (
                      <img
                        src={aliado} key={idx} />
                    )
                  })
                }
              </div>
            </Col>
          </Row>
        </Container>

      </div>

      <div className="boxContenedorCarruselAlianzas">
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
                    src={restaurant1}
                    alt="First slide"
                  />
                </Col>

                <Col>
                  <div className="boxTextoCarruselAlianzas">
                    <img
                      src={quoteIcon}
                    />
                    <h3>Jorge Lopez</h3>
                    <h4>Dueño Boa Restaurant</h4>
                    <p>Como restaurant, estamos muy contentos de unirnos a esta causa y poder colaborar con platos de comida ricos y de calidad, cocinados por nuestros propios chefs y con mucho cariño para las comunidades.</p>
                    <a href='https://www.boasantiago.cl/pedir' target='_blank'>Boasantiago.cl</a>
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
                    src={boa1}
                    alt="First slide"
                  />
                </Col>

                <Col>
                  <div className="boxTextoCarruselAlianzas">
                    <img
                      src={quoteIcon}
                    />
                    <h3>Jorge Lopez</h3>
                    <h4>Dueño Boa Restaurant</h4>
                    <p>Como restaurant, estamos muy contentos de unirnos a esta causa y poder colaborar con platos de comida ricos y de calidad, cocinados por nuestros propios chefs y con mucho cariño para las comunidades.</p>
                    <a href='https://www.boasantiago.cl/pedir' target='_blank'>Boasantiago.cl</a>
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
                    src={chimba1}
                    alt="First slide"
                  />
                </Col>

                <Col>
                  <div className="boxTextoCarruselAlianzas">
                    <img
                      src={quoteIcon}
                    />
                    <h3>Jorge Lopez</h3>
                    <h4>Dueño Boa Restaurant</h4>
                    <p>Como restaurant, estamos muy contentos de unirnos a esta causa y poder colaborar con platos de comida ricos y de calidad, cocinados por nuestros propios chefs y con mucho cariño para las comunidades.</p>
                    <a href='https://www.boasantiago.cl/pedir' target='_blank'>Boasantiago.cl</a>
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
                    src={cava1}
                    alt="First slide"
                  />
                </Col>

                <Col>
                  <div className="boxTextoCarruselAlianzas">
                    <img
                      src={quoteIcon}
                    />
                    <h3>Jorge Lopez</h3>
                    <h4>Dueño Boa Restaurant</h4>
                    <p>Como restaurant, estamos muy contentos de unirnos a esta causa y poder colaborar con platos de comida ricos y de calidad, cocinados por nuestros propios chefs y con mucho cariño para las comunidades.</p>
                    <a href='https://www.boasantiago.cl/pedir' target='_blank'>Boasantiago.cl</a>
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

        </Carousel>
      </div>
    </div>
  );


};

export default Alianzas;
