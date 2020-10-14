import React, { useState } from "react";
import emailjs from "emailjs-com";
import BotonGeneral from "../Botones/BotonGeneral";
import './ModuloContacto.css';

const ModuloContacto = () => {
  const frmContact = {
    userName: "",
    userEmail: "",
    concernCategory: "",
    emailTitle: "",
    emailDetails: "",
  };
  const [contact, setContact] = useState(frmContact);
  const [showMessage, setShowMessage] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact({ ...contact, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "default_service",
        "template_fofx3ss",
        {
          nombre_donador: contact.userName,
          email_donador: contact.userEmail,
          tipo_interes: contact.concernCategory,
          mensaje: contact.emailDetails,
        },

        "user_rM14hw1bnYdkRYLeQZpSK"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setContact(frmContact);
          setShowMessage(true);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };
  return (
    <div className="containerModuloContacto">

      <div className="alert alert-light" role="alert"></div>

      {showMessage ? (
        <div className="alert alert-success col-md-5 mx-auto" role="alert">
           <h4>Su correo se envio corréctamente!!</h4>
        </div>
      ) : (
        ``
      )}

      <form onSubmit={handleSubmit}>
        <div className="pt-3">
          <h2 className="font-weight-bold"> Contáctanos!</h2>
        </div>
        <div className="pt-3 col-md-5 mx-auto">
          <div className="form-group text-left">
            {" "}
            <b>Ingresa tu Nombre</b> <br />
            <input
              required
              type="text"
              value={contact.userName}
              name="userName"
              onChange={handleChange}
              className="form-control"
              placeholder="Tu nombre"
            />
          </div>
        </div>
        <div className="pt-3 col-md-5 mx-auto">
          <div className="form-group text-left">
            {" "}
            <b>Ingresa tu correo</b> <br />
            <input
              required
              type="text"
              value={contact.userEmail}
              name="userEmail"
              onChange={handleChange}
              className="form-control"
              placeholder="Correo electrónico"
            />
          </div>
        </div>
        <div className="pt-3 col-md-5 mx-auto">
          <div className="form-group text-left">
            {" "}
            <b>¿Qué te interesa saber?</b> <br />
            <select
              required
              className="form-control"
              value={contact.concernCategory}
              onChange={handleChange}
              name="concernCategory"
            >
              <option value="donaciones">Donaciones</option>
              <option value="informacion">Información</option>
              <option value="Ser parte">Ser parte del equipo</option>
              <option value="otros">Otros</option>
            </select>
          </div>
        </div>
        <div className="pt-3 col-md-5 mx-auto">
          <div className="form-group text-left"> </div>
        </div>
        <div className="pt-3 col-md-5 mx-auto">
          <div className="form-group text-left">
            <b>Mensaje</b> <br />
            <textarea
              required
              name="emailDetails"
              onChange={handleChange}
              className="form-control"
              placeholder="Mensaje"
              value={contact.emailDetails}
            ></textarea>
          </div>
        </div>
        <div className="containerbtoModulo">          
          <BotonGeneral contenidobtn={"Enviar"} />
        </div>
      </form>
    </div>
  );
};
export default ModuloContacto;
