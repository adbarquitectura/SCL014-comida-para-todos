import React, { useState } from "react";
import "./Alianzas.css";
import { Carousel } from "react-bootstrap";

import { Col, Container, Row } from "react-bootstrap";
import BotonGeneral from "../Botones/BotonGeneral";
import BotonLink from '../Botones/BotonLink';
import PrevIcon from "../Iconos/PrevIcon";
import NextIcon from "../Iconos/NextIcon";
import quoteIcon from "../../img/quote icon.png";

import restaurant from "../../img/99-restaurant.png";
import boa from "../../img/boa-logo.png";
import chimba from "../../img/Logo-LaChimba.png";
import cava from "../../img/cava_logo.png";

import restaurant1 from "../../img/99_restaurante.jpg";
import boa1 from "../../img/Boa-Restaurant.jpg";
import chimba1 from "../../img/cocinaconsentido.jpg";
import cava1 from "../../img/cava_rest.jpg";

// Data imagenes de carrusel
const alianzasData = [restaurant, boa, chimba, cava];

const Alianzas = (props) => {
  const [arregloAlianza, setArregloAlianza] = useState(alianzasData);

  const [index, setIndex] = useState(0);

  //funcion mueve arreglo e identifica sentido de carrusel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    if (e !== undefined) {
      if (e.currentTarget.className === "carousel-control-next") {
        actualizarAlianzasRenderizadasAdelante();
        console.log("mover arreglo adelante");
      } else if (e.currentTarget.className === "carousel-control-prev") {
        actualizarAlianzasRenderizadasAtras();
        console.log("mover arreglo atras");
      }
    } else {
      console.log("mover arreglo adelante");
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
        <a name={props.contenidoInfo}>
          <h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2>
        </a>
      </div>

      <div>
        <Container>
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
            <Col>
              <div className="boxBotonAlianzas">
                <BotonLink
                  contenidobtn={"Aporta como Restaurant"}
                  anclaLinkTo={"/comoAportar#¿Cómo aportar si eres un Restaurant?"}
                />
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="fotoAlianzasSec">
                {arregloAlianza.map((aliado, idx) => {
                  return <img className="imgFotoAlianzasSec" src={aliado} key={idx} />;
                })}
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
                    <img src={quoteIcon} />
                    <h3>Kurt Schmidt </h3>
                    <h4>Chef 99 Restaurante</h4>
                    <p>
                      Este es un nuevo tiempo, un tiempo de cambios. Nos
                      tomaremos esta crisis para reflexionar y para entender los
                      nuevos desafíos que nos impone el planeta, estamos para
                      ayudarnos uno a los otros, nosotros le ponemos el pecho y
                      aca estamos.
                    </p>
                    <a href="https://99restaurante.com/" target="_blank">
                      99restaurante.com
                    </a>
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
                    <img src={quoteIcon} />
                    <h3>Jorge Lopez</h3>
                    <h4>Dueño Boa Restaurant</h4>
                    <p>
                      Como restaurant, estamos muy contentos de unirnos a esta
                      causa y poder colaborar con platos de comida ricos y de
                      calidad, cocinados por nuestros propios chefs y con mucho
                      cariño para las comunidades. Nos llena de satisfacción
                      saber que con poco se ayuda mucho.
                    </p>
                    <a href="https://www.boasantiago.cl/pedir" target="_blank">
                      Boasantiago.cl
                    </a>
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
                    <img src={quoteIcon} />
                    <h3>Pablo Godoy</h3>
                    <h4>Fundador La Chimba </h4>
                    <p>
                      Somos una Corporación sin fines de lucro que busca aportar
                      al mejoramiento de las condiciones de vida de las
                      personas. Estamos muy contentos de poder colaborar con
                      comidas para todos, nos llena el alma y el corazón.
                    </p>
                    <a href="https://lachimba.org/" target="_blank">
                      lachimba.org
                    </a>
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
                    <img src={quoteIcon} />
                    <h3>Javier Nuñez</h3>
                    <h4>Dueño La Cava del Sommelier.</h4>
                    <p>
                      Nuestro equipo de cocina trabaja con cariño, con
                      convencimiento de que hacemos lo mejor que podemos y
                      aprendemos cada día para ser mejores. Felices de poder
                      unirnos en esta causa, creemos que todos podemos ayudar y
                      estamos aca para aportar nuestro granito de arena.
                    </p>
                    <a href="https://cavadelsommelier.cl/" target="_blank">
                      cavadelsommelier.cl
                    </a>
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
