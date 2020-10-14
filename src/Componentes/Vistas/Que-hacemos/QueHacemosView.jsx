import React from 'react';
import Campañas from '../../ElementosDinamicos/Campañas';
import DescripcionLoQueHacemos from '../../ElementosDinamicos/DescripcionLoQueHacemos';

const QueHacemosView = () => {
    return (

        <div>
            Estas en el módulo de “Qué hacemos”
            <DescripcionLoQueHacemos
            contenidoInfo={'Las ollas solidarias y la comunidad'}/>
            <Campañas/>

        </div >


    )
}

export default QueHacemosView;