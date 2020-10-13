import React, { useState } from 'react';
import './FormularioTalento.css';
import * as Comunas from './comunas.js';
import firebase from '../../Firebase';
import emailjs from "emailjs-com";

const FormularioMetroCuadrado = () => {

    /* Definición de Estado del form */
    const [formMetroCuadrado, setformMetroCuadrado] = useState({});

    /* Definición del Estado de select Comunas*/
    const [comunas, setcomunas] = useState([]);

    /* Contiene firestore */
    const refMetroCuadrado = firebase.firestore().collection('FormularioMetroCuadrado');



    /* Asociar opción de select */
    const RegionSelect = (e) => {
        const { name, value } = e.target;
        const region = Comunas[value];
        setcomunas([...region]);
        setformMetroCuadrado({ ...formMetroCuadrado, [name]: value })

    }

    /* Función para manejar cambio de input*/

    const HandleInputChange = (e) => {
        //   console.log(e.target.value)
        const { name, value } = e.target;
        // console.log(name,value);
        setformMetroCuadrado({ ...formMetroCuadrado, [name]: value })
    };

    /* Función para manejar Form con HandleSubmit*/
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(formMetroCuadrado);
        refMetroCuadrado.add(formMetroCuadrado)
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
                    email_donante: formMetroCuadrado.CorreoElectronico
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
                    <h3>Queremos avanzar en la autosustentabilidad de las comunidades por medio de la producción y cuidado de huertos en ellas. </h3>
                    <p>Si tienes un metro cuadrado disponible para llegar a este objetivo, inscribete y se parte de un cambio en tu comunidad.</p>
                    <p>Te enviaremos una respuesta a tu correo a la brevedad</p>
                </div>
                <form action="talento form-group" onSubmit={HandleSubmit}>
                    <label htmlFor="NombreCompleto"> Nombre Completo </label>
                    <input type="text" name="NombreCompleto" id="Nombre" placeholder=" Nombre y Apellido" onChange={HandleInputChange} />
                    <label htmlFor="CorreoElectronico"> Correo Eléctronico </label>
                    <input type="email" name="CorreoElectronico" id="Correo" placeholder="correo@electronico.com" onChange={HandleInputChange} />
                    <label htmlFor="Telefono"> Teléfono </label>
                    <input type="text" name="Telefono" id="Telefono" placeholder="1 2345789" onChange={HandleInputChange} />
                    <label htmlFor="Region"> Región </label>
                    <select name="Region" id="Region" onChange={RegionSelect}>
                        <option value="tarapaca">Región de Tarapacá</option>
                        <option value="antofagasta"> Región de Antofagasta </option>
                        <option value="atacama"> Región de Atacama </option>
                        <option value="coquimbo"> Región de Coquimbo </option>
                        <option value="valparaiso">Región de Valparaíso </option>
                        <option value="ohiggins"> Región del Libertador General Bernardo O'Higgins</option>
                        <option value="maule"> Región del Maule </option>
                        <option value="biobio"> Región del Biobío</option>
                        <option value="araucania"> Región de La Araucanía </option>
                        <option value="loslagos"> Región de Los Lagos </option>
                        <option value="aysen">Región Aysén del General Carlos Ibáñez del Campo</option>
                        <option value="magallanes"> Región de Magallanes y Antártica Chilena </option>
                        <option value="metropolitana"> Región Metropolitana de Santiago </option>
                        <option value="losríos"> Región de Los Ríos </option>
                        <option value="aricaparinacota"> Región de Arica y Parinacota </option>
                        <option value="ñuble"> Región de Ñuble </option>
                    </select>
                    <label htmlFor="Comuna"> Comuna </label>
                    <select name="Comuna" id="Comuna" onChange={HandleInputChange}>
                        <option value="">Seleccione su comuna </option>
                        {comunas.map((comuna, index) => {
                            return (<option key={index} value={comuna}>{comuna}</option>)
                        })}
                    </select>
                    <label htmlFor="MetroCuadrado"> Cuentanos con cuantos metros cuadrados para huertas quieres aportar </label>
                    <textarea name="MetroCuadrado" id="metrocuadrado" cols="40" rows="4" onChange={HandleInputChange}></textarea>
                    <input type="submit" value="enviar" placeholder="Enviar" className="btn mybtn" />
                </form>

            </div>


        </div>
    )
}

export default FormularioMetroCuadrado;
