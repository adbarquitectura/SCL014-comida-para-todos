import React from 'react';
import './EstilosBotones.css';
import imgCloseIcon from '../../img/closeModalIcon.png';


const BotonCloseModal = (props) => {
    return (
      <button className="btnCloseModal" onClick={props.funcion}>
          <img src={imgCloseIcon} />
      </button>
    )
  }
  export default BotonCloseModal;