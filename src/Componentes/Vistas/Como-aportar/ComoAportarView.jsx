import React from 'react';
import FormularioTalento from '../../Formularios/FormularioTalento';
import ModalFormularios from '../../Modales/ModalFormularios';
import BotonGeneral from '../../Botones/BotonGeneral';
import FormularioRestaurant from '../../Formularios/FormularioRestaurant';
import FormularioMetroCuadrado from '../../Formularios/FormularioMetro2';
import FormularioCapacitacion from '../../Formularios/FormularioCapacitación';
import FormularioBancoAlimentos from '../../Formularios/FormularioBancoAlimentos';
import AportarRestaurante from "../../ElementosDinamicos/AportarRestaurante";


const clickBton = () => {
  window.open("https://yodono.cl/proyecto/207/CultivaComidaparaTods");
};

const ComoAportarView = () => {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div>
      <BotonGeneral
        contenidobtn={"Inscribete"}
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
      
      <FormularioRestaurant/>
             <FormularioMetroCuadrado/>
             <FormularioCapacitacion/>
             <FormularioBancoAlimentos/> 
    </div>
  );
};

export default ComoAportarView;

