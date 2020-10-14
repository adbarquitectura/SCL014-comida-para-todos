import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./AportarRestaurant.css";
import BotonSecundario from "../Botones/BotonSecundario";
import AportaRestaurant from "../../img/AportaRestaurant.jpg";
import BotonGeneral from "../Botones/BotonGeneral";

const AportarRestaurante = (props) => {
  return (
    <div className="contenedorGeneralAportarRestaurant">
      <div className="boxTituloCarrusel">
        <div className="viñetaYellow"></div>
        <a name={props.contenidoInfo}><h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2></a>
      </div>
      <Container>
        <Row>
          <Col>
            <p>
              Los aportes desde los restaurantes son parte fundamental para que
              toda esta hermosa labor se vuelva realidad, los restaurantes
              colaboran, junto con nosotros a favor de las comunidades
              vulnerables, no solo llevándoles alimentos.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <div>
              <BotonSecundario contenidobtn={"Apadrina un comedor"} />
            </div>
          </Col>
          <Col>
            <div>
              <BotonSecundario contenidobtn={"Reactiva la economía"} />
            </div>
          </Col>
          <Col>
            <div>
              <BotonSecundario contenidobtn={"Alimenta a las comunidades"} />
            </div>
          </Col>
          <Col>
            <div>
              <BotonSecundario contenidobtn={"Multiplica las donaciones"} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="imgRestaurant">
              <img src={AportaRestaurant} alt="Foto Restaurant" />
            </div>
          </Col>
          <Col>
            <div className="ContainerBoxTexto">
              <h3> Cada restaurant apadrina un comedor </h3>
              <p>
                Cada restaurante apadrina un comedor social con el compromiso de
                en el corto plazo, debido a la emergencia sanitaria, ser parte
                de los cursos de capacitación y educación a la comunidad.
              </p>
              <BotonGeneral contenidobtn={"Aporta como Restaurant"} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AportarRestaurante;
