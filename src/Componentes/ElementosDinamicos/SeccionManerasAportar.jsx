import React from "react";
import TarjetasAportar from "./TarjetasAportar";
import Talento from "../../img/Talento.jpg";
import Metro from "../../img/Metro-cuadrado.jpg";
import Capacitacion from "../../img/Capacitacion.jpg";
import BancoAlimento from "../../img/Banco-de-Alimentos.jpg";
import "./SeccionManerasDeAportar.css";
import { Col, Container, Row } from 'react-bootstrap';


const SeccionManerasAportar = (props) => {
  return (
    <div className="contenedorManerasDeAportar">
      <div className="boxTituloCarrusel">
        <div className="viñetaYellow"></div>
        <a name={props.contenidoInfo}><h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2></a>
      </div>

      <div className="contenedorTarjetasAportar">

        <Container>
          <Row>
            <Col>
              <div className="contenedorParrafoTarjetasAportar">
                <h4>Sé parte de esta gran receta para un mejor país </h4>
                <p>
                  Estamos decididos a empoderar a la comunidad, ayudándola no solo con un
                  plato de alimento nutritivo, también existen otras maneras de aportar a
                  las comunidades como, por ejemplo: tu Talento, un metro cuadrado de cultivo,
                  horas de capacitación y banco de alimentos.
              </p>
              </div>

            </Col>

          </Row>

          <Row>
            <Col>
              <TarjetasAportar
                contenidoBotonTarjeta={"Talento"}
                contenidoAnclaTarjeta={props.contenidoAnclaSeccion}
                estiloBotonTarjeta={props.estiloBotonTarjetaActiva}
                funcionBotonTarjeta={props.funcionBotonTarjetaActivaTalento}
                imgSrc={Talento}
                tituloImg={"Talento"}
                parrafoImg={
                  "Aporta tiempo y lo que mejor sabes hacer, enseñándolo a la comunidad."
                }
              />
            </Col>
            <Col>
              <TarjetasAportar
                contenidoBotonTarjeta={"Metro cuadrado"}
                contenidoAnclaTarjeta={props.contenidoAnclaSeccion}
                estiloBotonTarjeta={props.estiloBotonTarjetaActiva}
                funcionBotonTarjeta={props.funcionBotonTarjetaActivaMetro}
                imgSrc={Metro}
                tituloImg={"Metro cuadrado"}
                parrafoImg={
                  "Cultiva en tu hogar las frutas y verduras que puedas y luego dónalas a la comunidad."
                }
              />
            </Col>
            <Col>
              <TarjetasAportar
                contenidoBotonTarjeta={"Capacitación"}
                contenidoAnclaTarjeta={props.contenidoAnclaSeccion}
                estiloBotonTarjeta={props.estiloBotonTarjetaActiva}
                funcionBotonTarjeta={props.funcionBotonTarjetaActivaCapacitacion}
                imgSrc={Capacitacion}
                tituloImg={"Capacitación"}
                parrafoImg={
                  "Regala horas de capacitación para que la comunidad aprenda sobre lo que tú ya sabes."
                }
              />
            </Col>
            <Col>
              <TarjetasAportar
                contenidoBotonTarjeta={"Banco de Alimentos"}
                contenidoAnclaTarjeta={props.contenidoAnclaSeccion}
                estiloBotonTarjeta={props.estiloBotonTarjetaActiva}
                funcionBotonTarjeta={props.funcionBotonTarjetaActivaBanco}
                imgSrc={BancoAlimento}
                tituloImg={"Banco de Alimento"}
                parrafoImg={
                  "Aporta con los alimentos que tengas en tu hogar y nosotros los vamos a buscar."
                }
              />
            </Col>
          </Row>
        </Container>

      </div>
    </div>
  );
};

export default SeccionManerasAportar;
