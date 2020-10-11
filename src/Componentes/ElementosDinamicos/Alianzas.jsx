/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import "./TarjetasConImagenes.css";
import restaurant from "../../img/99-restaurant.png";
import boa from "../../img/Boa.png";
import chimba from "../../img/lachimba.jpg";
import cava from "../../img/CAVA_DEL_SOMMELIER.jpg";

import './Alianzas.css';
import { Carousel } from 'react-bootstrap';
import imgPrevIcon from '../../img/previoIcon.png';
import imgNextIcon from '../../img/nextIcon.png';


const alianzasData = [
  restaurant,
  boa,
  chimba,
  cava
];

const PrevIcon = () => {
  return (
    <img src={imgPrevIcon} />
  )
};

const NextIcon = () => {
  return (
    <img src={imgNextIcon} />
  )
};

const Alianzas = () => {
  const [arregloAlianza, setArregloAlianza] = useState(alianzasData);

  const [index, setIndex] = useState(0);

  //funcion mueve arreglo e identifica sentido de carrusel
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    if (e !== undefined) {
      if (e.currentTarget.className === "carousel-control-next") {
        actualizarAlianzasRenderizadasAdelante();
        console.log('mover arreglo adelante')
      }
      else if (e.currentTarget.className === "carousel-control-prev") {
        actualizarAlianzasRenderizadasAtras();
        console.log('mover arreglo atras')
      }
    }
    else {
      console.log('mover arreglo adelante')
      actualizarAlianzasRenderizadasAdelante();
    }
  };


  const actualizarAlianzasRenderizadasAdelante = () => {
    arregloAlianza.push(arregloAlianza.shift());
    setArregloAlianza([...arregloAlianza]);
  };

  const actualizarAlianzasRenderizadasAtras = () => {
    arregloAlianza.unshift(arregloAlianza.pop());
    setArregloAlianza([...arregloAlianza]);
  };

  return (
    <div>
      <div className="fotoAlianzas">
        {
          arregloAlianza.map((aliado, idx) => {
            return (
              <img src={aliado} key={idx} />
            )
          })
        }
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={<PrevIcon />}
        nextIcon={<NextIcon />}
      >
        <Carousel.Item>
          <div className="contenedorItemCarousel">
            <img
              src={restaurant}
              alt="First slide"
            />
            <div>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="contenedorItemCarousel">
            <img
              src={boa}
              alt="First slide"
            />
            <div>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="contenedorItemCarousel">
            <img
              src={chimba}
              alt="First slide"
            />
            <div>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="contenedorItemCarousel">
            <img
              src={cava}
              alt="First slide"
            />
            <div>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
        </Carousel.Item>

      </Carousel>
    </div>

  );


};

export default Alianzas;

/* return (
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
); */