import React from "react";
import BotonGeneral from "../Botones/BotonGeneral";
import "./SeccionManerasAportar";

const TarjetasAportar = (props) => {
  return (
    <div className="boxImagenesTarjeta">
      <img className="imgAportar" src={props.imgSrc} alt="First slide" />

      <div className="boxTextoTarjeta">
        <BotonGeneral contenidobtn={props.contenidoBotonTarjeta} />
        <p className="parrafoBoxTextoTarjeta">{props.parrafoImg}</p>
      </div>
    </div>
  );
};

export default TarjetasAportar;
