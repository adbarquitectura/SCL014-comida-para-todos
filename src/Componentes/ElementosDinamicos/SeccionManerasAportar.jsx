import React from "react";
import TarjetasConImagenes from "./TarjetasAportar";
import Talento from "../../img/Talento.jpg";
import Metro from "../../img/Metro-cuadrado.jpg";
import Capacitacion from "../../img/Capacitacion.jpg";
import BancoAlimento from "../../img/Banco-de-Alimentos.jpg";
import "./SeccionManerasDeAportar.css";

const SeccionManerasAportar = (props) => {
  return (
    <div>
      <div className="contenedorManerasDeAportar">
        <h2 className="ManerasDeAportar">Otras maneras de aportar</h2>
        <p>
          Sé parte de esta gran receta para un mejor país Estamos decididos a
          empoderar a la comunidad, ayudándola no solo con un plato de alimento
          nutritivo, también existen otras maneras de aportar a las comunidades
          como, por ejemplo: tu Talento, un metro cuadrado de cultivo, horas de
          capacitación y banco de alimentos.
        </p>
        <div className="contenedorTarjetas">
          <TarjetasConImagenes
            contenidoBotonTarjeta={"Talento"}
            imgSrc={Talento}
            tituloImg={"Talento"}
            parrafoImg={
              "Aporta tiempo y lo que mejor sabes hacer, enseñándolo a la comunidad."
            }
          />

          <TarjetasConImagenes
            contenidoBotonTarjeta={"Metro cuadrado"}
            imgSrc={Metro}
            tituloImg={"Metro cuadrado"}
            parrafoImg={
              "Cultiva en tu hogar las frutas y verduras que puedas y luego dónalas a la comunidad."
            }
          />

          <TarjetasConImagenes
            contenidoBotonTarjeta={"Capacitación"}
            imgSrc={Capacitacion}
            tituloImg={"Capacitación"}
            parrafoImg={
              "Regala horas de capacitación para que la comunidad aprenda sobre lo que tú ya sabes."
            }
          />

          <TarjetasConImagenes
            contenidoBotonTarjeta={"Banco de Alimento"}
            imgSrc={BancoAlimento}
            tituloImg={"Banco de Alimento"}
            parrafoImg={
              "Aporta con los alimentos que tengas en tu hogar y nosotros los vamos a buscar."
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SeccionManerasAportar;
