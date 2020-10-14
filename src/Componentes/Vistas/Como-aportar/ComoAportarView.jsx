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

import imgTalento from '../../../img/Maneras de aportar_Talento.jpg';
import imgCapacitacion from '../../../img/Maneras de aportar_Capacita.jpg';
import imgMetro from '../../../img/Maneras de aportar_Huerto.jpg';
import imgBanco from '../../../img/Maneras de aportar_Banco.jpg';

import dataAportar from './dataComoAportar';


const clickBton = () => {
  window.open("https://yodono.cl/proyecto/207/CultivaComidaparaTods");
};



const ComoAportarView = () => {
  const [dataComoAportar, setDataComoAportar] = useState(dataAportar);

  const [modalShow, setModalShow] = React.useState(false);
  const [estadoboton, setEstadoboton] = useState(false);

  //Maneja estado de boton
  const [contenidoModal, setContenidoModal] = useState();

  //Maneja estado de boton
  const [styleBotonTalento, setStyleBotonTalento] = useState({ backgroundColor: '#FD4C00', border: 'none' });
  const [styleBotonMetro, setStyleBotonMetro] = useState({ backgroundColor: '#FD4C00', border: 'none' });
  const [styleBotonCapacitacion, setStyleBotonCapacitacion] = useState({ backgroundColor: '#FD4C00', border: 'none' });
  const [styleBotonBanco, setStyleBotonBanco] = useState({ backgroundColor: '#FD4C00', border: 'none' });




  //Maneja estados para seccion de despliegue de formularios
  const [imgFondoSeccion, setImgFondoSeccion] = useState({ backgroundImage: `url('${imgTalento}')` });
  const [tituloSeccionDespliegue, setTituloSeccionDespliegue] = useState('Que tipo de Talento puedo ragalar');
  const [parrafoSeccionDespliegue, setParrafoSeccionDespliegue] = useState('Los aportes desde los restaurantes son parte fundamental para que toda esta hermosa labor se vuelva realidad, los restaurantes colaboran, junto con nosotros a favor de las comunidades vulnerables, no solo llevándoles alimentos.');
  const [funcionBotonSeccionDespliegue, setFuncionBotonSeccionDespliegue] = useState();

  const changeEstadoBotonActiveTalento = () => {
    setStyleBotonTalento({ backgroundColor: 'transparent', border: '2px solid #FD4C00', color: '#FD4C00' });
    setStyleBotonMetro({ backgroundColor: '#FD4C00', border: 'none' });
    setStyleBotonCapacitacion({ backgroundColor: '#FD4C00', border: 'none' });
    setStyleBotonBanco({ backgroundColor: '#FD4C00', border: 'none' });
    setImgFondoSeccion({ backgroundImage: `url('${imgTalento}')` });
    setTituloSeccionDespliegue('Que tipo de Talento puedo ragalar');
    setParrafoSeccionDespliegue('Los aportes desde los restaurantes son parte fundamental para que toda esta hermosa labor se vuelva realidad, los restaurantes colaboran, junto con nosotros a favor de las comunidades vulnerables, no solo llevándoles alimentos.');

    /* console.log(dataComoAportar.dataAportar);
    setEstadoboton(true); */
  };

  const changeEstadoBotonActiveMetro = () => {
    setStyleBotonMetro({ backgroundColor: 'transparent', border: '2px solid #FD4C00', color: '#FD4C00' });
    setStyleBotonTalento({ backgroundColor: '#FD4C00', border: 'none' });
    setStyleBotonCapacitacion({ backgroundColor: '#FD4C00', border: 'none' });
    setStyleBotonBanco({ backgroundColor: '#FD4C00', border: 'none' });
    setImgFondoSeccion({ backgroundImage: `url('${imgMetro}')` });
    setTituloSeccionDespliegue('¿Puedo regalar cultivos desde mi hogar?');
    setParrafoSeccionDespliegue('La respuesta es SÍ, otra manera de aportar es que regales algo de tu propia huerta casera, cualquier verdura, fruta o hierbas con los que quieras colaborar, serán un aporte para las ollas comunes de todo el País. Solo debes completar un breve formulario para nosotros poder ponernos en contacto con tigo e ir a buscar los alimentos hasta la puerta de tu hogar.');

  };

  const changeEstadoBotonActiveCapacitacion = () => {
    setStyleBotonCapacitacion({ backgroundColor: 'transparent', border: '2px solid #FD4C00', color: '#FD4C00' });
    setStyleBotonTalento({ backgroundColor: '#FD4C00', border: 'none' });
    setStyleBotonMetro({ backgroundColor: '#FD4C00', border: 'none' });
    setStyleBotonBanco({ backgroundColor: '#FD4C00', border: 'none' });
    setImgFondoSeccion({ backgroundImage: `url('${imgCapacitacion}')` });
    setTituloSeccionDespliegue('¿Con qué tipo de capacitaciones puedo aportar?');
    setParrafoSeccionDespliegue('Si tienes conocimientos de algún área en específico y quieres colaborar para que las comunidades se empoderen y aprendan algo que les pueda dar más herramientas para poder generar ingresos por su cuenta, ésta manera de donar será la indicada. Puede ser por ejemplo algún taller para que aprendan inglés, un taller enfocado en que las personas de la tercera edad aprendan a navegar por internet o utilizar celulares, algun taller sobre cómo llevar cuentas, etc. Completando el siguiente formulario podrás inscribirte para participar capacitando a las comunidades.');

  };

  const changeEstadoBotonActiveBanco = () => {
    setStyleBotonBanco({ backgroundColor: 'transparent', border: '2px solid #FD4C00', color: '#FD4C00' });
    setStyleBotonTalento({ backgroundColor: '#FD4C00', border: 'none' });
    setStyleBotonCapacitacion({ backgroundColor: '#FD4C00', border: 'none' });
    setStyleBotonMetro({ backgroundColor: '#FD4C00', border: 'none' });
    setImgFondoSeccion({ backgroundImage: `url('${imgBanco}')` });
    setTituloSeccionDespliegue('Banco de alimentos');
    setParrafoSeccionDespliegue('Otra manera de aportar es regalando los alimentos que quieras y puedas donar desde tu hogar, puede ser cualquier tipo de alimento no perecible. Tus donaciones nos servirán para hacer más contundentes los platos de almuerzos y nos permitirá llegar a más personas. Nos debes indicar en el siguiente formulario la fecha que deseas que retiremos tu donación.');

  };

  // const changeEstadoBotonNormal = () => {
  //   setStyleBoton({ backgroundColor: '#FD4C00', border: 'none' });
  // };

  return (
    <div className="containeComoAportarView">
      <RegalaUnAlmuerzo
        contenidoInfo={'Regala un Almuerzo'}
      />

      <SeccionManerasAportar
        contenidoInfo={'Otras maneras de aportar'}

        estiloBotonTarjetaActivaTalento={styleBotonTalento}
        estiloBotonTarjetaActivaMetro={styleBotonMetro}
        estiloBotonTarjetaActivaCapacitacion={styleBotonCapacitacion}
        estiloBotonTarjetaActivaBanco={styleBotonBanco}

        funcionBotonTarjetaActivaTalento={changeEstadoBotonActiveTalento}
        funcionBotonTarjetaActivaMetro={changeEstadoBotonActiveMetro}
        funcionBotonTarjetaActivaCapacitacion={changeEstadoBotonActiveCapacitacion}
        funcionBotonTarjetaActivaBanco={changeEstadoBotonActiveBanco}

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
      <FormularioCapacitacion />*/}
      <FormularioBancoAlimentos />
    </div >


  );
};
export default ComoAportarView;

