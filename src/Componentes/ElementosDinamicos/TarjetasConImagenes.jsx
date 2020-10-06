import React from 'react';
import './TarjetasConImagenes.css';

const TarjetasConImagenes = (props) => {
    return (
        <div className="boxTarjeta">
            <div className="boxImagenes">
                <img
                    className="imgTarjeta"
                    src={props.imgSrc}
                    alt="First slide"
                />
                <img
                    className="logoTarjeta"
                    src={props.logoImgSrc}
                    alt="First slide"
                />
            </div>


            <div className="boxTextoTarjeta">
                <h3>{props.tituloImg}</h3>
                <p>{props.parrafoImg}</p>
            </div>

        </div>
    )
}

export default TarjetasConImagenes;