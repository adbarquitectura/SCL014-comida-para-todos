import React from 'react';
import './EstilosBotones.css';


const BotonGeneral = (props) => {
    return (
      <button className="btnGeneral" onClick={props.funcion}> {props.contenidobtn} 
      </button>
    )
  }
  export default BotonGeneral;