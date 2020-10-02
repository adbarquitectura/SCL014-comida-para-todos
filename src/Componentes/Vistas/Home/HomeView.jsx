import React from 'react';
import LaReceta from '../../MultimediaComponents/LaReceta.mp4';


const BlueVioletBtn = (props) => {
  return (
    <button className="btn mybtn"> {props.contenidobtn} </button>
  )
}

const RedesSociales = () => {
  return (
    <div >
      Redes Sociales
    </div>
  )
}

const ContainerMultimediaHome = () => {
  return (
    <div>
      Menu Video Ppal
    </div>
  )
}

const CarrouselSeguridadAlimentaria = () => {
  return (
    <div>
      Aqui va el Carrousel
    </div>
  )
}

const HomeView = () => {
    return (

        <div>
            <RedesSociales />
            <ContainerMultimediaHome />
            <CarrouselSeguridadAlimentaria />
            
            <video className="video"
                autoPlay
                muted loop >
                <source src={LaReceta} type="video/mp4" />
            </video>
            <BlueVioletBtn
                contenidobtn={'Hola'}
            />
            <button className="btn mybtn"> Prueba bootstrap </button>
        </div >


    )
}

export default HomeView;