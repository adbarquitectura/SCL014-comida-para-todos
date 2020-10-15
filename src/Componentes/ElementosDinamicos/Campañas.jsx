import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cocinaollacomun from '../../img/cocinaollacomun18.jpg';
import motehuesillos from '../../img/fotomotehuesillos.jpg';
import fotoservilletas18 from '../../img/fotoservilletas18.jpg'
import fotoempanadas from '../../img/fotosempanadas.jpg';
import './Campañas.css';

const Campañas = (props) => {
    return (
        <div className="contenedorLoQueHacemos">
            <div className="contenedorboxLoQueHacemos">
                <Container>
                    <Row>
                        <Col>
                            <div className="fotoAlmuerzo">
                                <img className="imgalmuerzo" src={fotoservilletas18} alt="Foto" />
                            </div>
                        </Col>
                        <Col>
                            <div className="fotoAlmuerzo">
                                <   img className="imgalmuerzo" src={motehuesillos} alt="Foto" />
                            </div>

                        </Col>
                    </Row>
                    <Row>
                        <div className="textocampaña">
                            <h3>Campaña 18 de Septiembre</h3>
                            <p>Con esta campaña buscamos dar un almuerzo típico chileno, los cuales consiste en deliciosas empanadas de pino, anticuchos, pebre y postres chilenos, a todos las personas de nuestra comunidad. 
                            Este 17, 18 y 19 se entregaron 2.040 almuerzos dieciocheros gracias a la colaboración de todos, los que permitieron celebrar estas fiestas con la "guatita llena y el corazón contento".</p>
                        </div>
                    </Row>
                    <Row>
                        <Col>
                            <div className="fotoAlmuerzo">
                                <img src={cocinaollacomun} alt="Foto" />
                            </div>
                        </Col>
                        <Col>
                            <div className="fotoAlmuerzo">
                                <   img className="imgalmuerzo" src={fotoempanadas} alt="Foto" />
                            </div>

                        </Col>
                    </Row>
                </Container >
            </div>
        </div>
    )
}

export default Campañas
