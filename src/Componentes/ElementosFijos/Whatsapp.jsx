import React from "react";
import ReactWhatsapp from "react-whatsapp";
import "./Whatsapp.css";
/* import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"; */
/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; */

const Whatsapp = () => {
  return (
    <div className="btnWhatsapp">
      <ReactWhatsapp number="56-9-524-11777" message="Hello World!!!" />
      {/*       <FontAwesomeIcon icon={faWhatsapp} size="2x" /> */}
    </div>
  );
};

export default Whatsapp;
