import React from "react";
/* import "./RegalaUnAlmuerzo.css"; */
import { Col, Container, Row } from "react-bootstrap";
import ElEquipo from "../../../img/equipo.jpg";
import Rafael from "../../../img/Ellipse 2.png";
import Enrique from "../../../img/enrique-gellona.png";
import Camila from "../../../img/Camila Moreno.png";
import Maria from "../../../img/Maria jose e la fuente.png";

const QuienesSomosView = (props) => {
  return (
    <div className="contenedorGeneralRegalaAlmuerzo">
      <div className="boxTituloCarrusel">
        <a name={props.contenidoInfo}>
          <h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2>
        </a>
      </div>
      <div className="contenedorboxRegalaAlmuerzo">
        <Container>
          <Row>
            <Col>
              <div className="textoalineadoIzquierda">
                <div className="viñetaYellow"></div>
                <h3>Acerca de nosotros...</h3>

                <p>
                  Trabajamos para ayudar a combatir el hambre en Chile, a través
                  una alimentación de calidad y nutritiva; conectando,
                  colaborando y generando asociatividad entre los actores de la
                  cadena gastronómica y la ciudadanía "Comida para todos” es una
                  plataforma solidaria que nace de la unión de organizaciones
                  sociales, instituciones públicas, restaurantes, productores,
                  que busca salvaguardar la Seguridad Alimentaria.
                </p>
              </div>
            </Col>

            <Col>
              <div className="fotoAlmuerzo">
                <img src={ElEquipo} alt="Foto" />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <div className="textoalineadoIzquierda">
                <div className="viñetaYellow"></div>
                <h3>El equipo</h3>
                <p>
                  Somos un gran equipo de trabajo interdisciplinario y en
                  conjunto nos esforzamos por que día a día se cumplan los
                  objetivos de nuestra labor.
                </p>
              </div>
            </Col>
            <Row>
              <Col>
                <div className="fotoAlmuerzo2">
                  <img src={Rafael} alt="Foto" />
                  <p>Rafael Rincón Director y Cofundador </p>
                </div>
              </Col>
              <Col>
                <div className="fotoAlmuerzo2">
                  <img src={Enrique} alt="Foto" />
                  <p>Enrique Gellona Cofundador</p>
                </div>
              </Col>
              <Col>
                <div className="fotoAlmuerzo2">
                  <img src={Camila} alt="Foto" />
                  <p>Camila Moreno Cofundadora </p>
                </div>
              </Col>
              <Col>
                <div className="fotoAlmuerzo2">
                  <img src={Maria} alt="Foto" />
                  <p>María Jose de la Fuente Cofundadora </p>
                </div>
              </Col>
            </Row>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default QuienesSomosView;
