import React from 'react';
import './Botones.css';



const BotonGeneral = (props) => {
    return (
      <button className="btn mybtn" onClick={props.funcion}> {props.contenidobtn} 
      </button>
    )
  }
  export default BotonGeneral;