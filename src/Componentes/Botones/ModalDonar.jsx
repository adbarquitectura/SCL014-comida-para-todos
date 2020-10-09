import React from 'react'; 
import Cerrar from '../../img/Cerrar.png';
import './ModalDonar.css';

const ModalDonar = () => {
    return (
        <div className="modal-wrapper">
            <div className="modal-header">
                <span className ="close-modal-btn"> <img src={Cerrar} alt=""/> </span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h2>Será redireccionado al sitio de yodono.cl para completar la donación</h2>
                    <p> Tú aporte generará un plato de alimento nutritivo, para alguien que no lo tiene :)</p>
                </div>
                <div className="modal-footer">
                    <button className="btn-entendido"> Entendido</button>
                </div>
            </div>
        </div>
    )
}

export default ModalDonar
