import React from 'react';
import './EstilosBotones.css';


const BotonSecundario = (props) => {
    return (
      <button className="btnSecundario" onClick={props.funcion}> {props.contenidobtn} 
      </button>
    );
  };
  export default BotonSecundario;