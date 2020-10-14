import React, { useState } from 'react';
import './ComoAportarView.css';
import SeccionManerasAportar from '../../ElementosDinamicos/SeccionManerasAportar';

import FormularioTalento from '../../Formularios/FormularioTalento';
import ModalFormularios from '../../Modales/ModalFormularios';
import BotonGeneral from '../../Botones/BotonGeneral';
import FormularioRestaurant from '../../Formularios/FormularioRestaurant';
import FormularioMetroCuadrado from '../../Formularios/FormularioMetro2';
import FormularioCapacitacion from '../../Formularios/FormularioCapacitación';
import FormularioBancoAlimentos from '../../Formularios/FormularioBancoAlimentos';
import AportarRestaurante from "../../ElementosDinamicos/AportarRestaurante";
import RegalaUnAlmuerzo from '../../ElementosDinamicos/RegalaUnAlmuerzo';
import ManerasAportarSeccionDesp from '../../ElementosDinamicos/ManerasAportarSeccionDesp';
import imgTalento from '../../../img/imgcarousel2.jpg';


const clickBton = () => {
  window.open("https://yodono.cl/proyecto/207/CultivaComidaparaTods");
};


const ComoAportarView = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [estadoboton, setEstadoboton] = useState(false);

  //Maneja estado de boton
  const [contenidoModal, setContenidoModal] = useState();

  //Maneja estado de boton
  const [styleBoton, setStyleBoton] = useState({ backgroundColor: '#FD4C00', border: 'none' });

  //Maneja estados para seccion de despliegue de formularios
  const [imgFondoSeccion, setImgFondoSeccion] = useState({ backgroundImage : `url('${imgTalento}')`});
  const [tituloSeccionDespliegue, setTituloSeccionDespliegue] = useState('Que tipo de Talento puedo ragalar');
  const [parrafoSeccionDespliegue, setParrafoSeccionDespliegue] = useState('Los aportes desde los restaurantes son parte fundamental para que toda esta hermosa labor se vuelva realidad, los restaurantes colaboran, junto con nosotros a favor de las comunidades vulnerables, no solo llevándoles alimentos.');
  const [funcionBotonSeccionDespliegue, setFuncionBotonSeccionDespliegue] = useState();
 
  const changeEstadoBotonActive = () => {
    setStyleBoton({ backgroundColor: 'transparent', border: '2px solid #FD4C00', color: '#FD4C00' });
    setEstadoboton(true);
  };

  const changeEstadoBotonNormal = () => {
    setStyleBoton({ backgroundColor: '#FD4C00', border: 'none' });
  };

  return (
    <div className="containeComoAportarView">
      <RegalaUnAlmuerzo
        contenidoInfo={'Regala un Almuerzo'}
      />

      <SeccionManerasAportar
        contenidoInfo={'Otras maneras de aportar'}
        estiloBotonTarjetaActiva={styleBoton}
        funcionBotonTarjetaActivaTalento={changeEstadoBotonActive}
        funcionBotonTarjetaActivaMetro={changeEstadoBotonActive}
        funcionBotonTarjetaActivaCapacitacion={changeEstadoBotonActive}
        funcionBotonTarjetaActivaBanco={changeEstadoBotonActive} 

      />
      <ManerasAportarSeccionDesp
        imgFondoSeccion={imgFondoSeccion}
        tituloSeccionDespliegue={tituloSeccionDespliegue}
        parrafoSeccionDespliegue={parrafoSeccionDespliegue}
        contenidoBotonSeccionDespliegue={'Inscribete'}
        funcionBotonSeccionDespliegue={funcionBotonSeccionDespliegue}
        
      />
{/* 
      < BotonGeneral
        contenidobtn={'Inscribe tu talento'}
        funcion={() => setModalShow(true)}
      /> */}

      <ModalFormularios
        show={modalShow}
        onHide={() => setModalShow(false)}
        tituloModal={
          "Será redireccionado al sitio de yodono.cl para completar la donación."
        }
        contenidoModal={contenidoModal}       
        funcionBotonModal={clickBton}
      />
      <AportarRestaurante
        contenidoInfo={"¿Cómo aportar si eres un Restaurant?"}
      />
      {/* 
      <FormularioRestaurant />
      <FormularioMetroCuadrado />
      <FormularioCapacitacion />
      <FormularioBancoAlimentos /> */}
    </div >


  );
};
export default ComoAportarView;

