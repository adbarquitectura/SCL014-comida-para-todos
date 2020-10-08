/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import logo from "../../img/logonaranja.png";
import RedesSociales from "./RedesSociales";
import viñeta from "../../img/Viñeta naranja.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="pastillaFooter">
      <div>
        <footer>
          <ul>
            <li>
              <img className="viñeta" src={viñeta} />
              <a href="/PreguntasFrecuentes">Preguntas frecuentes</a>
            </li>
            <li>
              <img className="viñeta" src={viñeta} />
              <a href="/DondeEstamos">¿Dónde Estamos?</a>
            </li>
            <li>
              <img className="viñeta" src={viñeta} />
              <a href="/Transparencia">Transparencia</a>
            </li>
          </ul>
          <div className="logoImg">
            <img src={logo} />
          </div>
          <RedesSociales />
          <div ClassName="Año">
            <a href="/2020" ClassName="Año">
              ©2020 - Comida para todos, Santiago de Chile
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
