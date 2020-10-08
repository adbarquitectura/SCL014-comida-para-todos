/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../img/logoblanco.png";
import RedesSociales from "./RedesSociales";

const Footer = () => {
  return (
    <div className="pastillaFooter">
      <div className="logoImg">
        <img src={logo} />

        <div>
          <footer>
            <ul>
              <li>
                <a href="/PreguntasFrecuentes">Preguntas frecuentes</a>
              </li>
              <li>
                <a href="/DondeEstamos">¿Dónde Estamos?</a>
              </li>
              <li>
                <a href="/Transparencia">Transparencia</a>
              </li>
            </ul>
            <a href="/2020">©2020</a>
            <RedesSociales/>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Footer;
