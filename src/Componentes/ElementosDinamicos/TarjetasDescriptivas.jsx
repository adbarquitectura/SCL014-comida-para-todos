import React from "react";
import TarjetasConImagenes from "./TarjetasConImagenes";

import AlimentoBueno from '../../img/Alimento-bueno.png';
import Empleo from '../../img/Empleo.png';
import Educación from '../../img/Educacion.png';
import Comunidad from '../../img/Comunidad.png';
import './TarjetasConImagenes.css';
import { Col, Container, Row } from 'react-bootstrap';

const TarjetasDescriptivas = (props) => {
    return (
        <div className="contenedorGeneralTarjetas">

            <div className="boxTituloCarrusel">
                <div className="viñetaYellow"></div>
                <h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2>
            </div>
            <div>
                <Container>
                    <Row>
                        <Col>
                            <TarjetasConImagenes
                                imgSrc={AlimentoBueno}
                                tituloImg={'Alimento Bueno'}
                                parrafoImg={'Alimento sano y nutritivo, cocinando en los restaurantes que se han unido a la iniciativa solidaria.'}
                            />
                        </Col>
                        <Col>
                            <TarjetasConImagenes
                                imgSrc={Empleo}
                                tituloImg={'Empleo'}
                                parrafoImg={'Creamos puestos de trabajo y reactivamos la actividad de restaurantes, transportistas y productores.'}
                            />
                        </Col>
                        <Col>
                            <TarjetasConImagenes
                                imgSrc={Educación}
                                tituloImg={'Educación'}
                                parrafoImg={'Transferimos conocimientos, para la mejora de la calidad de vida de las comunidades locales vulnerables.'}
                            />
                        </Col>
                        <Col>

                            <TarjetasConImagenes
                                imgSrc={Comunidad}
                                tituloImg={'Comunidad'}
                                parrafoImg={'Contemplamos una campaña ciudadana, con el fin de involucrar a las personas, ya sea desde un rol de donantes o como voluntarios en la entrega de alimentos.'}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>


        </div>
    )

};

export default TarjetasDescriptivas;

