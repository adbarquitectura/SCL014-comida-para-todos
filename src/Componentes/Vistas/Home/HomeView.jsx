import React from 'react';
import BotonGeneral from '../../Botones/BotonGeneral';
import BotonSecundario from '../../Botones/BotonSecundario';
import ContainerMultimediaHome from '../../ElementosDinamicos/ContainerMultimediaHome';
import CarrouselMultimediaProblematica from '../../ElementosDinamicos/CarruselMultimediaProblematica';
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

      <Infografia
        contenidoInfo={'impacto-organizacion'}
      />

      <TarjetasDescriptivas
        contenidoInfo={'Nuestros 4 ingredientes para la receta'}
      />

      <Infografia
        contenidoInfo={'ciclo-de-vida'}
      />

      <CarruselMultimediaInformativo
        contenidoInfo={'Seguridad alimentaria en Chile'}
      />
      <SeccionManerasAportar
        contenidoInfo={'Otras maneras de aportar'}
        maneras={'talento, metro cuadrado, educación y horas de capacitación, alimentos'}
      />

      <Alianzas
        contenidoInfo={'Nuestras Alianzas'}
      />
    

    </div >


  )
}

export default HomeView;