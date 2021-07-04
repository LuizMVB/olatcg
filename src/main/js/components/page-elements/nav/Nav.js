import React from "react";
import { Link } from 'react-router-dom';
import '../../../../static/css/Nav.css';
import Toolkit from '../../../infra/Toolkit';

function Nav(){

    const msg = Toolkit.Messages;

    return(
        <nav className="teal">
            <div className="nav-wrapper">
            <h6 className="brand-logo left">{msg['common.logo.name']}</h6>
            <ul id="nav-mobile" className="right hide-on-med-and-down nav-links">
                <Link to="/">
                    <li>
                        {msg['nav.links.home']}
                    </li>
                </Link>
                <Link to="/tools">
                    <li>
                        {msg['nav.links.ferramentas']}
                    </li>
                </Link>
                <Link to="/about">
                    <li>
                        {msg['nav.links.conteudo']}
                    </li>
                </Link>
                <Link to="/task-table">
                    <li>
                        {msg['nav.links.filaProcessamento']}
                    </li>
                </Link>
            </ul>
            </div>
        </nav>
    );
}

export default Nav;