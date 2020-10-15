import React, { useState } from 'react';
import './Formularios.css';
import * as Comunas from './comunas.js';
import firebase from '../../Firebase';
import emailjs from "emailjs-com";
import ModalGeneral from '../Modales/ModalGeneral';

const FormularioBancoAlimentos = () => {

    /* Definición de Estado del form */
    const [formBancoAlimentos, setformBancoAlimentos] = useState({});

    /* Definición del Estado de select Comunas*/
    const [comunas, setcomunas] = useState([]);

     /* Definición Estado Modal */
    const [modalShow, setModalShow] = React.useState(false);

    /* Contiene firestore */
    const refBancoAlimentos = firebase.firestore().collection('FormularioBancoAlimentos');



    /* Asociar opción de select */
    const RegionSelect = (e) => {
        const { name, value } = e.target;
        const region = Comunas[value];
        setcomunas([...region]);
        setformBancoAlimentos({ ...formBancoAlimentos, [name]: value })

    }

    /* Función para manejar cambio de input*/

    const HandleInputChange = (e) => {
        //   console.log(e.target.value)
        const { name, value } = e.target;
        // console.log(name,value);
        setformBancoAlimentos({ ...formBancoAlimentos, [name]: value })
    };


    /* Función para manejar Form con HandleSubmit*/
    const HandleSubmit = (e) => {
        e.preventDefault();
        console.log(formBancoAlimentos);
        refBancoAlimentos.add(formBancoAlimentos)
            .then(() => {
                enviarCorreoConfirmacion();
            });
        setModalShow(true);
        
      
    };

    //funcion enviar correo Confirmacion
    const enviarCorreoConfirmacion = () => {
        emailjs
            .send(
                "default_service",
                //ID plantilla correo a enviar
                "template_5w4glhd",
                {
                    email_donante: formBancoAlimentos.CorreoElectronico
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

    /* Función para manejar boton de Segundo Modal */
    const clickBton = () => {
        setModalShow(false);
        // setformBancoAlimentos({...formBancoAlimentos});
    };

    return (
        <div className="form-group form-bg">
            <div className="FormTalento">
                <div className="text">
                    <h3> Queremos crear comunidades con el apoyo de todos, puedes aportar con alimentos a nuestro "Banco de Alimentos". Así podremos llegar cada día a más comunidades. </h3>
                    <p>A continuación puedes completar este formulario de inscripción.</p>
                    <p>Te enviaremos una respuesta a tu correo a la brevedad</p>
                </div>
                <form action="talento form-group" onSubmit={HandleSubmit}>
                    <div class="form-group">
                        <label htmlFor="NombreCompleto"> Nombre Completo </label>
                        <input type="text" className="form-control" name="NombreCompleto" id="Nombre" placeholder=" Nombre y Apellido" onChange={HandleInputChange} />
                    </div>
                    <div class="form-group">
                        <label htmlFor="CorreoElectronico"> Correo Electrónico </label>
                        <input type="email" className="form-control" name="CorreoElectronico" id="Correo" placeholder="correo@electronico.com" onChange={HandleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Telefono"> Teléfono </label>
                        <input type="text" className="form-control" name="Telefono" id="Telefono" placeholder="1 2345789" onChange={HandleInputChange} />
                    </div>
                    <div className="form-region">
                        <div className="form-group">
                            <label htmlFor="Region"> Región </label>
                            <select name="Region" className="form-control" id="Region" onChange={RegionSelect}>
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
                        </div>
                        <div className="form-group">
                            <label htmlFor="Comuna"> Comuna </label>
                            <select name="Comuna" className="form-control" id="Comuna" onChange={HandleInputChange}>
                                <option value="">Seleccione su comuna </option>
                                {comunas.map((comuna, index) => {
                                    return (<option key={index} value={comuna}>{comuna}</option>)
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="form-region">
                        <div className="form-group">
                            <label htmlFor="Alimento"> Cuentanos con que alimentos te gustaría aportar a nuestro Banco </label>
                            <textarea name="Alimento" className="form-control" id="capacitacion" cols="40" rows="4" onChange={HandleInputChange}></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Fecha">Señala la fecha en que quieres que retiremos los alimentos </label>
                            <input type="date" className="form-control" name="Fecha" id="fecha" />
                        </div>

                    </div>

                    <input type="submit" value="Enviar" placeholder="Enviar" className="btn mybtn" />
                </form>

            </div>

            
            <ModalGeneral
            show={modalShow}
            onHide={() => setModalShow(false)}
            tituloModal={'Gracias por unirte a la causa.'}
            contenidoModal={'A la brevedad te enviaremos un correo con más información.'}
            contenidoBotonModal={'Cerrar'}
            funcionBotonModal={clickBton}
            />


        </div>
    )
}

export default FormularioBancoAlimentos;
