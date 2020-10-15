import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

import NextIcon from "../Iconos/NextIcon";
import PrevIcon from "../Iconos/PrevIcon";

import imgcarrusel1 from "../../img/FotoAbuelita.png";
import imgcarrusel2 from "../../img/yellow.jpg";
import "./CarruselMultimediaComunidad.css";

const CarruselMultimediaComunidad = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="boxCarruselComunidad">
      <div className="boxTituloCarrusel">
        <div className="viñetaYellow"></div>
        <a name={props.contenidoInfo}>
          <h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2>
        </a>
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
                    <h3>Sra. Eugenia</h3>
                    <h4>Hogar de ancianos “El Remanso”</h4>
                    <p>
                      Agradezco a esta iniciativa, ya que más que alimentarme el
                      estomago me alimenta el corazón. La compañía de estas
                      personas me da alegría y animos para el día a día.
                    </p>
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
                    <h3>Sr. Adrian Cardozo</h3>
                    <h4>Comedor comunitario "Manos solidarias"</h4>
                    <p>
                      Cuando llego al centro comunitario con tantos platos
                      llenos de comida tan rica y saludable se nota la felicidad
                      de las personas, no hay nada mejor que tener la panza
                      llena y el corazón contento.
                    </p>
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

export default CarruselMultimediaComunidad;
