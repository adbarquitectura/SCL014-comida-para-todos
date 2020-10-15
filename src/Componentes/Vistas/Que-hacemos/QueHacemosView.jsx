import React from 'react';
import Campañas from '../../ElementosDinamicos/Campañas';
import DescripcionLoQueHacemos from '../../ElementosDinamicos/DescripcionLoQueHacemos';
import FormularioPagQueHacemos from '../../Formularios/FormularioPagQuehacemos';
import './QueHacemos.css';

const QueHacemosView = () => {
    return (

        <div className= "containeComoAportarView">
            <DescripcionLoQueHacemos
                contenidoInfo={'Las ollas solidarias y la comunidad'} />
            <Campañas />
            <div className="Contenedorformulario">
                <div className="texto">
                    <h3>Invítanos a tu comunidad</h3>
                    <br/> <br/>
                    <p>Si quieres ayudar a tu comunidad y que llevemos Comida Para Todos, </p>
                      <p>¡ Inscríbete !.</p>   
                </div>
                <div className='formulario'>
                    <FormularioPagQueHacemos />
                </div>

            </div>


        </div >
    );
};

export default QueHacemosView;