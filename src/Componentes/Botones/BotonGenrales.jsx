import React from 'react';



const BotonGeneral = (props) => {
    return (
      <button className="btn mybtn" onClick={props.function}> {props.contenidobtn} 
      </button>
    )
  }
  export default BotonGeneral;