import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import cocinaollacomun from '../../img/cocinaollacomun18.jpg';
import motehuesillos from '../../img/fotomotehuesillos.jpg';
import './Campañas.css';

const Campañas = (props) => {
    return (
        <div className="contenedorLoQueHacemos">
        <div className="contenedorboxLoQueHacemos">
            <Container>
                <Row>
                    <Col>
                        <div className="fotoAlmuerzo">
                            <img className="imgalmuerzo" src={cocinaollacomun} alt="Foto" />
                            <img className="imgalmuerzo" src={cocinaollacomun} alt="Foto" />
                        </div>
                    </Col>
                </Row>
                <Row>
                   <div className="textocampaña">
                       <h3>Campaña 18 de Septiembre</h3>
                        <p>¡Y se terminan nuestras fiestas patrias! Un 18 diferente, pero logramos tener un 18 para Todos... gracias también a ustedes.
                            Este 17, 18 y 19 se entregaron 2.040 almuerzos dieciocheros gracias a su colaboración, los que permitieron celebrar estas fiestas con la "guatita llena y el corazón contento".</p>
                   </div>
                </Row>
                <Row>
                    <Col>
                        <div className="fotoAlmuerzo">
                         <img src={motehuesillos} alt="Foto" />  
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    </div>
    )
}

export default Campañas
