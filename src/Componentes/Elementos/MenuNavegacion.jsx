import React from 'react';
import BotonDonar from '../Botones/Boton-donar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import QuienesSomosView from '../Vistas/Quienes-somos/QuienesSomosView';
import QueHacemosView from '../Vistas/Que-hacemos/QueHacemosView';
import ComoAportarView from '../Vistas/Como-aportar/ComoAportarView';
import ContactoView from '../Vistas/Contacto/ContactoView';
import HomeView from '../Vistas/Home/HomeView';

const MenuNavegacion = () => {
    return (
        <Router>
            <div>
                <nav>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/quienesSomos">¿Quiénes somos?</Link></li>
                        <li><Link to="/queHacemos">¿Qué hacemos?</Link></li>
                        <li><Link to="/comoAportar">¿Cómo aportar?</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <BotonDonar />
                    </ul>

                </nav>

                <Switch>

                    <Route exact path="/">
                        <HomeView />
                    </Route>
                    <Route path="/quienesSomos">
                        <QuienesSomosView />
                    </Route>
                    <Route path="/queHacemos">
                        <QueHacemosView />
                    </Route>
                    <Route path="/comoAportar">
                        <ComoAportarView />
                    </Route>
                    <Route path="/contacto">
                        <ContactoView />
                    </Route>

                </Switch>

            </div >
        </Router >

    )
}

export default MenuNavegacion;