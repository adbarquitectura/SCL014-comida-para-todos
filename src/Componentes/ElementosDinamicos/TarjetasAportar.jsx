import React from "react";
import BotonGeneral from "../Botones/BotonGeneral";
import "./SeccionManerasDeAportar.css";

const TarjetasAportar = (props) => {
  return (
    <div className="boxImagenesTarjetaAportar">
      <img
        className="imgAportar"
        src={props.imgSrc}
        alt="First slide" />

      <div className="boxTextoTarjetaAportar">
        <BotonGeneral
          contenidobtn={props.contenidoBotonTarjeta}
        />
        <p className="parrafoBoxTextoTarjetaAportar">{props.parrafoImg}</p>
      </div>
    </div>
  );
};

export default TarjetasAportar;
