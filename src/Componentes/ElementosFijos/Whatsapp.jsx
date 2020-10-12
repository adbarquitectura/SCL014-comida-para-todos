import React from "react";
import ReactWhatsapp from "react-whatsapp";
import "./Whatsapp.css";


const Whatsapp = () => {
  return (
    <div className="btnWhatsapp">
      <ReactWhatsapp number="56-9-524-11777" message="Quisiera donar..." />
      <h4>Conversemos</h4>      
    </div>
  );
};

export default Whatsapp;
