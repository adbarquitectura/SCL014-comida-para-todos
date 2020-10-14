import React from 'react';
import BotonGeneral from '../../Botones/BotonGeneral';
import BotonSecundario from '../../Botones/BotonSecundario';
import ContainerMultimediaHome from '../../ElementosDinamicos/ContainerMultimediaHome';
import CarruselMultimediaComunidad from '../../ElementosDinamicos/CarruselMultimediaComunidad';

import Infografia from '../../ElementosDinamicos/Infografia';
import TarjetasDescriptivas from '../../ElementosDinamicos/TarjetasDescriptivas';
import CarruselMultimediaInformativo from '../../ElementosDinamicos/CarruselMultimediaInformativo';
import SeccionManerasAportar from '../../ElementosDinamicos/SeccionManerasAportar';
import Alianzas from '../../ElementosDinamicos/Alianzas';

import TarjetasDonaciones from '../../ElementosDinamicos/TarjetasDonaciones';

import './HomeView.css';


const HomeView = () => {
  return (

    <div className="containerMainView">
      <ContainerMultimediaHome />

      {/* <CarrouselMultimediaProblematica 
      tituloPrimerSlide = {'titulo1'}
      parrafoPrimerSlide = {'parrafo1'}

      tituloSegundoSlide = {'titulo2'}
      parrafoSegundoSlide = {'parrafo2'}

      tituloTercerSlide = {'titulo3'}
      parrafoTercerSlide = {'parrafo3'}

      />   */}

      <TarjetasDonaciones />

      <SeccionManerasAportar
        contenidoInfo={'Otras maneras de aportar'}
      />

      <CarruselMultimediaInformativo
        contenidoInfo={'Seguridad alimentaria en Chile'}
      />

      <TarjetasDescriptivas
        contenidoInfo={'Nuestros 4 ingredientes para la receta'}
      />

      <Infografia
        contenidoInfo={'impacto-organizacion'}
      />

      <Infografia
        contenidoInfo={'ciclo-de-vida'}
      />

      <Alianzas
        contenidoInfo={'Nuestras Alianzas'}
      />

      <CarruselMultimediaComunidad
        contenidoInfo={'¿Qué dice la comunidad en las redes?'}
      />

    </div >

  )
}

export default HomeView;