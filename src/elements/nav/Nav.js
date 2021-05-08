import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav(){
      
    return(
        <nav className="teal">
            <div className="nav-wrapper">
            <h6 className="brand-logo left">OLATCG</h6>
            <ul id="nav-mobile" className="right hide-on-med-and-down nav-links">
                <Link to="/">
                    <li>
                        home
                    </li>
                </Link>
                <Link to="/tools">
                    <li>
                        ferramentas
                    </li>
                </Link>
                <Link to="/about">
                    <li>
                        conteúdo
                    </li>
                </Link>
                <Link to="/task-table">
                    <li>
                        table de processamento
                    </li>
                </Link>
            </ul>
            </div>
        </nav>
    );
}

export default Nav;