import React from 'react';
import BotonGeneral from '../../Botones/BotonGenrales';
import ContainerMultimediaHome from '../../ElementosDinamicos/ContainerMultimediaHome';
import CarrouselMultimediaProblematica from '../../ElementosDinamicos/CarrouselMultimediaProblematica';

const HomeView = () => {
  return (

    <div>
      <ContainerMultimediaHome />
      <CarrouselMultimediaProblematica />
      <BotonGeneral
        contenidobtn={'Hola'}
      />

    </div >


  )
}

export default HomeView;