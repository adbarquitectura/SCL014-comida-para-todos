import React from 'react';
import './TarjetasConImagenes.css';

const TarjetasConImagenes = (props) => {
    return (
        <div className="boxImagenesTarjeta">

            <img
                className="imgTarjeta"
                src={props.imgSrc}
                alt="First slide"
            />

            <div className="boxTextoTarjeta">
                <h3 className="tituloBoxTextoTarjeta">{props.tituloImg}</h3>
                <p className="parrafoBoxTextoTarjeta">{props.parrafoImg}</p>
            </div>

        </div>
    )
}

export default TarjetasConImagenes;