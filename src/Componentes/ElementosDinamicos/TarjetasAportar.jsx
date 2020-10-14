import React from "react";
import BotonLink from "../Botones/BotonLink";
import "./SeccionManerasDeAportar.css";

const TarjetasAportar = (props) => {
  return (
    <div className="boxImagenesTarjetaAportar">
      <img
        className="imgAportar"
        src={props.imgSrc}
        alt="First slide" />

      <div className="boxTextoTarjetaAportar">
        <BotonLink
          contenidobtn={props.contenidoBotonTarjeta}
          anclaLinkTo={props.contenidoAnclaTarjeta}
          funcion={props.contenidoBotonfuncionTarjeta}
        />
        <p className="parrafoBoxTextoTarjetaAportar">{props.parrafoImg}</p>
      </div>
    </div>
  );
};

export default TarjetasAportar;
