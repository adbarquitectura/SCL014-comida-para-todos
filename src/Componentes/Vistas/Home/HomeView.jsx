import React from 'react';
// import BotonGeneral from '../../Botones/BotonGeneral';
// import BotonSecundario from '../../Botones/BotonSecundario';
import ContainerMultimediaHome from '../../ElementosDinamicos/ContainerMultimediaHome';
import CarruselMultimediaComunidad from '../../ElementosDinamicos/CarruselMultimediaComunidad';
import InfografiaImpacto from '../../ElementosDinamicos/InfografiaImpacto';
import InfografiaCiclo from '../../ElementosDinamicos/InfografiaCiclo';
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

      <TarjetasDonaciones />

      <SeccionManerasAportar
        contenidoInfo={'Otras maneras de aportar'}
      />

      <CarruselMultimediaInformativo
        contenidoInfo={'Seguridad alimentaria en Chile'}
      />

      <InfografiaImpacto />

      <TarjetasDescriptivas
        contenidoInfo={'Nuestros 4 ingredientes para la receta'}
      />

      <InfografiaCiclo />

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