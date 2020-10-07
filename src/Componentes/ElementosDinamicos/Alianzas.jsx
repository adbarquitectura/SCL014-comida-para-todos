/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./TarjetasConImagenes.css";
import restaurant from "../../img/99-restaurant.png";
import boa from "../../img/Boa.png";
import chimba from "../../img/lachimba.jpg";
import cava from "../../img/CAVA_DEL_SOMMELIER.jpg";

const Alianzas = () => {
  return (
    <div>
      Nuestras Alianzas
      <div className="fotoAlianzas">
        <img src={restaurant} />
        <img src={boa} />
        <img src={chimba} />
        <img src={cava} />

        <p>
          Como restaurantes, estamos muy contentos de unirnos a esta causa y
          poder colaborar con platos de comida ricos y de calidad, cocinados por
          nustros propios chefs y con mucho cariño para las comunidades.
        </p>
      </div>
    </div>
  );
};

export default Alianzas;
