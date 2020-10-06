import React from 'react';
import TarjetasConImagenes from './TarjetasConImagenes';
import recetaalimentologo from '../../img/recetaalimentologo.png';
import recetaalimentoimg from '../../img/recetaalimentoimg.jpg';
import './TarjetasConImagenes.css';

const TarjetasDescriptivas = (props) => {
    return (
        <div className="contenedorGeneralTarjetas">
            <h2>{props.contenidoInfo}</h2>
            <div className="contenedorTarjetas">
                <TarjetasConImagenes
                imgSrc= {recetaalimentoimg}
                logoImgSrc= {recetaalimentologo}
                tituloImg= {'Alimento Bueno'}
                parrafoImg= {'prueba p'}
                />
            </div>
        </div>
    )
};

export default TarjetasDescriptivas;