import React from 'react';
import BotonGeneral from '../../Botones/BotonGenrales';
import LaReceta from '../../MultimediaComponents/LaReceta.mp4';



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
            <ContainerMultimediaHome />
            <CarrouselSeguridadAlimentaria />
            
            <video className="video"
                autoPlay
                muted loop >
                <source src={LaReceta} type="video/mp4" />
            </video>
            <BotonGeneral
                contenidobtn={'Hola'}
            />
            
        </div >


    )
}

export default HomeView;