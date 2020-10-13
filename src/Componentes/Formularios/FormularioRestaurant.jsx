import React, { useState } from 'react';
import './Formularios.css';
import firebase from '../../Firebase';
import emailjs from "emailjs-com";

const FormularioRestaurant = () => {

    /* Definición de Estado del form */
    const [formRestaurant, setformRestaurant] = useState({});

    /* Contiene firestore */
    const refRestaurant = firebase.firestore().collection('FormularioRestaurant');

    /* Función para manejar cambio de input*/

    const HandleInputChange = (e) => {
        //   console.log(e.target.value)
        const { name, value } = e.target;
        // console.log(name,value);
        setformRestaurant({ ...formRestaurant, [name]: value })
    };

    /* Función para manejar Form con HandleSubmit*/
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(formRestaurant);
        refRestaurant.add(formRestaurant)
            .then(() => {
                enviarCorreoConfirmacion();
            });
    };

    //funcion enviar correo Confirmacion
    const enviarCorreoConfirmacion = () => {
        emailjs
            .send(
                "default_service",
                //ID plantilla correo a enviar
                "template_5w4glhd",
                {
                    email_donante: formRestaurant.CorreoElectronico
                },
                // User ID servicio 
                "user_rM14hw1bnYdkRYLeQZpSK"
            )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                },
                (err) => {
                    console.log("FAILED...", err);
                }
            );
    };


    return (
        <div className="form-group form-bg">
            <div className="FormTalento">
                <div className="text">
                    <h3>Ayuda a las comunidades y de paso genera empleos en tu cocina.</h3>
                    <p>Sabemos que estos tiempos han sido dificiles para el sector gastronómico, pero si te unes a la causa,
                        también se veran beneficiados ustedes</p>
                    <h2>Formulario de Registro</h2>
                </div>
                <form action="restaurant form-group" onSubmit={HandleSubmit}>
                    <div className="form-group">
                        <label htmlFor="NombreCompleto"> Nombre Completo </label>
                        <input type="text" className="form-control" name="NombreCompleto" id="Nombre" placeholder=" Nombre y Apellido" onChange={HandleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CorreoElectronico"> Nombre Restaurant </label>
                        <input type="text" className="form-control" name="NombreRestaurant" id="Restaurant" placeholder="Nombre Restaurant" onChange={HandleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CorreoElectronico"> Correo Eléctronico </label>
                        <input type="email" className="form-control" name="CorreoElectronico" id="Correo" placeholder="correo@electronico.com" onChange={HandleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Telefono"> Teléfono </label>
                        <input type="text" className="form-control" name="Telefono" id="Telefono" placeholder="1 2345789" onChange={HandleInputChange} />
                    </div>

                    <input type="submit" value="Enviar" placeholder="Enviar" className="btn mybtn" />
                </form>

            </div>


        </div>
    )
}

export default FormularioRestaurant;