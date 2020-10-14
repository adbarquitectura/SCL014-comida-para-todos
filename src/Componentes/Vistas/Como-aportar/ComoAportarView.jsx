import React from 'react';
import FormularioTalento from '../../Formularios/FormularioTalento';
import ModalFormularios from '../../Modales/ModalFormularios';
import BotonGeneral from '../../Botones/BotonGeneral';
import FormularioRestaurant from '../../Formularios/FormularioRestaurant';
import FormularioMetroCuadrado from '../../Formularios/FormularioMetro2';
import FormularioCapacitacion from '../../Formularios/FormularioCapacitación';
import FormularioBancoAlimentos from '../../Formularios/FormularioBancoAlimentos';

const clickBton = () => {
    window.open('https://yodono.cl/proyecto/207/CultivaComidaparaTods');
};

const ComoAportarView = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (


        <div>
            < BotonGeneral
                contenidobtn={'Inscribe tu talento'}
                funcion={() => setModalShow(true)}
            />

            <ModalFormularios
                show={modalShow}
                onHide={() => setModalShow(false)}
                // tituloModal={'Será redireccionado al sitio de yodono.cl para completar la donación.'}
                contenidoModal={<FormularioTalento/>}
                // contenidoBotonModal={'Eviar'}
                // funcionBotonModal={clickBton}
            />

            {/* < BotonGeneral
                contenidobtn={'Inscribe tu Restaurant'}
                funcion={() => setModalShow(true)}
            />

            <ModalFormularios
                show={modalShow}
                onHide={() => setModalShow(false)}
                contenidoModal={<FormularioRestaurant/>}
            />
              */}
              <FormularioRestaurant/>
             <FormularioMetroCuadrado/>
             <FormularioCapacitacion/>
             <FormularioBancoAlimentos/> 
        </div >


    )
}

export default ComoAportarView;