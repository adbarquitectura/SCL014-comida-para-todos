import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import imgcarousel1 from '../../img/imgcarousel1.jpg';
import imgcarousel2 from '../../img/imgcarousel2.jpg';
import imgcarousel3 from '../../img/imgcarousel3.jpg';


const CarruselMultimediaProblematica = (props) => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgcarousel1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{props.tituloPrimerSlide}</h3>
            <p>{props.parrafoPrimerSlide}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgcarousel2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{props.tituloSegundoSlide}</h3>
            <p>{props.parrafoSegundoSlide}</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imgcarousel3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{props.tituloTercerSlide}</h3>
            <p>{props.parrafoTercerSlide}</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default CarruselMultimediaProblematica;

