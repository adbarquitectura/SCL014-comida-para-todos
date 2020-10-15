import React from "react";
import "./QuienesSomosView.css";
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
        <div className="viñetaYellow"></div>
        <h2 className="tituloalineadoIzquierda">Acerca de nosotros</h2>
      </div>

      <div className="contenedorboxRegalaAlmuerzo">

        <Container>
          <Row>
            <Col>
              <div className="parrafoAlineadoIzquierda">
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

              <img className="imgSectionNosotros" src={ElEquipo} alt="Foto" />

            </Col>
          </Row>
        </Container>


        <div className="boxTituloCarrusel">
          <div className="viñetaYellow"></div>
          <h2 className="tituloalineadoIzquierda">Nuestro Equipo</h2>
        </div>
        <Container>

          <Row>
            <Col>
              <div className="fotoAlmuerzoDos">
                <img src={Rafael} alt="Foto" />
                <h4>Rafael Rincón </h4>
                <p>Director y Cofundador</p>
              </div>
            </Col>
            <Col>
              <div className="fotoAlmuerzoDos">
                <img src={Enrique} alt="Foto" />
                <h4>Enrique Gellona</h4>
                <p>Cofundador</p>
              </div>
            </Col>
            <Col>
              <div className="fotoAlmuerzoDos">
                <img src={Camila} alt="Foto" />
                <h4>Camila Moreno</h4>
                <p>Cofundadora</p>
              </div>
            </Col>
            <Col>
              <div className="fotoAlmuerzoDos">
                <img src={Maria} alt="Foto" />
                <h4>María Jose de la Fuente</h4>
                <p>Cofundadora</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <p className="parrafoFinal">
                Somos un gran equipo de trabajo interdisciplinario y en
                conjunto nos esforzamos por que día a día se cumplan los
                objetivos de nuestra labor.
              </p>

            </Col>
          </Row>

        </Container>
      </div>
    </div >
  );
};

export default QuienesSomosView;
