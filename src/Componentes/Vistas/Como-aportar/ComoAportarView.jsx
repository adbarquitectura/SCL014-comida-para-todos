import React, {useState} from 'react';
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



const clickBton = () => {
  window.open("https://yodono.cl/proyecto/207/CultivaComidaparaTods");
};


const ComoAportarView = () => {
  const [modalShow, setModalShow] = React.useState(false);


  // const [styleBoton, changeEstadoBotonActive, changeEstadoBotonNormal] = estadoBoton();
  const [styleBoton, setStyleBoton] = useState({ backgroundColor: '#FD4C00', border: 'none' })

  const changeEstadoBotonActive = () => {    
    setStyleBoton({ backgroundColor: 'transparent', border: '2px solid #FD4C00', color: '#FD4C00' });
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
        funcionBotonTarjetaActiva={changeEstadoBotonActive}

      />

      < BotonGeneral
        contenidobtn={'Inscribe tu talento'}
        funcion={() => setModalShow(true)}
      />

      <ModalFormularios
        show={modalShow}
        onHide={() => setModalShow(false)}
        tituloModal={
          "Será redireccionado al sitio de yodono.cl para completar la donación."
        }
        contenidoModal={<FormularioTalento />}
        contenidoBotonModal={"Eviar"}
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

