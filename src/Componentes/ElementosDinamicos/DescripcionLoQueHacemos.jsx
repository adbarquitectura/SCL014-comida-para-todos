import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import fotoquehacemos from '../../img/FotoQueHacemos.jpg';


const DescripcionLoQueHacemos = (props) => {
    return (
        <div className="contenedorLoQueHacemos">
            <div className="boxTituloCarrusel">
                <div className="viñetaYellow"></div>
                <a name={props.contenidoInfo}><h2 className="tituloalineadoIzquierda">{props.contenidoInfo}</h2></a>
            </div>
            <div className="contenedorboxLoQueHacemos">
                <Container>
                    <Row>
                        <Col>
                            <div className="textoalineadoIzquierda">
                                <h3> Además de un exquisito y nutritivo plato de comida, les llevamos cariño, alegría y un momento para compartir y aprender cosas nuevas a las personas de las comunidades.</h3>
                                <p>
                                Comida para todos se esfuerza día a día para que a más personas les llege hasta sus mesas un plato de almuerzo.
                                </p>
                                <p>A continuación te mostraremos un poco de lo que han sido las campañas dentro de algunas comunas del País.</p>
                            </div>
                        </Col>

                        <Col>
                            <div className="fotoAlmuerzo">
                                <img src={fotoquehacemos} alt="Foto" />
                            </div>
                        </Col>
                    </Row>
                </Container >
            </div>
        </div>
    )
}

export default DescripcionLoQueHacemos
