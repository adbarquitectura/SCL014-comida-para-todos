import React from 'react';
import FormularioTalento from '../../Formularios/FormularioTalento';
import ModalFormularios from '../../Modales/ModalFormularios';
import BotonGeneral from '../../Botones/BotonGeneral';

const clickBton = () => {
    window.open('https://yodono.cl/proyecto/207/CultivaComidaparaTods');
};

const ComoAportarView = () => {

    const [modalShow, setModalShow] = React.useState(false);

    return (


        <div>
            < BotonGeneral
                contenidobtn={'Inscribete'}
                funcion={() => setModalShow(true)}
            />

            <ModalFormularios
                show={modalShow}
                onHide={() => setModalShow(false)}
                tituloModal={'Será redireccionado al sitio de yodono.cl para completar la donación.'}
                contenidoModal={<FormularioTalento/>}
                contenidoBotonModal={'Eviar'}
                funcionBotonModal={clickBton}
            />

        </div >


    )
}

export default ComoAportarView;