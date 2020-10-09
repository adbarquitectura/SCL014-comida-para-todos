/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./RedesSociales.css";
import instagram from "../../img/Instagram.png";
import facebook from "../../img/Facebook.png";
import twitter from "../../img/Twitter.png";

const RedesSociales = () => {
  return (
    <div className="Social-Container">
      <div className="SocialIcons">
        <a
          href="https://www.instagram.com/comida_para_todos_cl/"
          className="Instagram Social"
        >
          <img src={instagram} />
        </a>
        <a
          href="https://www.facebook.com/Comida-para-Todos-100133851719302/"
          className="Facebook Social"
        >
          <img src={facebook} />
        </a>
        <a href="https://twitter.com/chilecomida" className="Twitter Social">
          <img src={twitter} />
        </a>
      </div>
      <div className="SocialText">
        <p>¡Síguenos en las redes! </p>
      </div>
    </div>
  );
};

export default RedesSociales;
