import React, { useState } from "react";
import emailjs from "emailjs-com";

const Correo = () => {
  const frmContact = {
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
          email_donador: contact.userEmail,
          tipo_donacion: contact.concernCategory,
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
    <div className="container pt-2 text-center">
      <div className="alert alert-light" role="alert"></div>

      {showMessage ? (
        <div className="alert alert-success col-md-5 mx-auto" role="alert">
          El correo se envio correctamente!!
        </div>
      ) : (
        ``
      )}

      <form onSubmit={handleSubmit}>
        <div className="pt-3">
          <h3 className="font-weight-bold"> Contáctanos! </h3>
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
              <option value="">Donaciones</option>
              <option value="info">Información</option>
              <option value="buy">Ser parte del equipo</option>
              <option value="play tennis">Otros</option>
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
        <div className="pt-3 col-md-5 mx-auto text-left">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default Correo;
