import React from 'react';
import BotonGeneral from '../../Botones/BotonGenrales';
import ContainerMultimediaHome from '../../ElementosDinamicos/ContainerMultimediaHome';
// import CarrouselMultimediaProblematica from '../../ElementosDinamicos/CarruselMultimediaProblematica';
import Infografia from '../../ElementosDinamicos/Infografia';
import TarjetasDescriptivas from '../../ElementosDinamicos/TarjetasDescriptivas';
import CarruselMultimediaInformativo from '../../ElementosDinamicos/CarruselMultimediaInformativo';
import SeccionManerasAportar from '../../ElementosDinamicos/SeccionManerasAportar';
import Alianzas from '../../ElementosDinamicos/Alianzas';


const HomeView = () => {
  return (

    <div>
    <ContainerMultimediaHome />
      
     {/* <CarrouselMultimediaProblematica 
      tituloPrimerSlide = {'titulo1'}
      parrafoPrimerSlide = {'parrafo1'}

      tituloSegundoSlide = {'titulo2'}
      parrafoSegundoSlide = {'parrafo2'}

      tituloTercerSlide = {'titulo3'}
      parrafoTercerSlide = {'parrafo3'}

      />   */}

      <Infografia
        contenidoInfo={'impacto-organizacion'}
      />

      <TarjetasDescriptivas
        contenidoInfo={'Nuestros 4 ingredientes para la receta'}
      />

      <Infografia
        contenidoInfo={'ciclo-de-vida'}
      />

      <CarruselMultimediaInformativo />
      <SeccionManerasAportar
        maneras={'talento, metro cuadrado, educación y horas de capacitación, alimentos'}
      />

      <Alianzas />

      <BotonGeneral
        contenidobtn={'Hola'}
      />

    </div >


  )
}

export default HomeView;