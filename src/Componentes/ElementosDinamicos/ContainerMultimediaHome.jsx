import React from "react";
import videoCPT from "../MultimediaComponents/videofinalCPT.mp4";

import "./ContainerMultimediaHome.css";
import Carousel from "react-bootstrap/Carousel";
import imgcarousel2 from "../../img/objeticos de desarrollo.jpg";
import imgcarousel3 from "../../img/imgcarousel2.jpg";
import BotonLinkBlank from "../Botones/BotonLinkBlank";

/* Función Botón 'Regala un almuerzo' */
const clickBton = () => {
  console.log("estoy escuchando");
  alert("Para realizar la donación te redireccionaremos a www.yodono.cl");
  window.open("https://yodono.cl/proyecto/207/CultivaComidaparaTods");
};

const ContainerMultimediaHome = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <video className="video" autoPlay muted loop>
            <source src={videoCPT} type="video/mp4" />
          </video>
          <Carousel.Caption>
            <div className="Overlay">
              <h1 className="colorTextoh1">
                {" "}
                Ayúdanos a sumar más platos de comida en las mesas de los
                chilenos{" "}
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="video" src={imgcarousel2} alt="Third slide" />

          <Carousel.Caption>
            <div className="Overlay">
              <h1 className="colorTextoh12">
                {" "}
                Comida para todos colabora con los siguientes objetivos de
                desarrollo sostenible mundiales:{" "}
              </h1>
              <BotonLinkBlank
                contenidobtn={"Objetivos de desarrollo sostenible"}
                anclaLinkTo={
                  "https://www.un.org/sustainabledevelopment/es/hunger/"
                }
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="video" src={imgcarousel3} alt="Third slide" />

          <Carousel.Caption>
            <div className="Overlay">
              <h1 className="colorTextoh1">
                {" "}
                Ayúdanos a combatir el hambre en Chile donando almuerzos
                solidarios.{" "}
              </h1>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ContainerMultimediaHome;
