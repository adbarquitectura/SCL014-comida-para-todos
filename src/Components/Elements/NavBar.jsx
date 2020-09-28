import React from 'react';
import BotonDonar from './Boton-donar';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import QuienesSomosView from '../Views/Quienes-somos/Quienes-somos';
import QueHacemosView from  '../Views/Que-hacemos/Que-hacemos';
import ComoAportarView from '../Views/Como-aportar/Como-aportar';
import ContactoView from '../Views/Contacto/Contacto';

import Home from '../../Home';

const Navbar = () => {
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

export default Navbar;