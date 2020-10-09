import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './RedesSociales.css';


const RedesSociales = () => {
    return (
        <div className="Social-Container" >
            <div className="SocialIcons">
                <a href="https://www.instagram.com/comida_para_todos_cl/" className="Instagram Social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
                <a href="https://www.facebook.com/Comida-para-Todos-100133851719302/" className="Facebook Social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com/chilecomida" className="Twitter Social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                </a>
            </div>
            <div className="SocialText">
                <p className="ColorParrafo">¡Síguenos en las redes! </p>
            </div>
        </div>
    )
}

export default RedesSociales;
