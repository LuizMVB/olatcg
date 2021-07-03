import React from 'react';
import LocalAlignment from '../../../../static/images/localAlignment.png';
import GlobalAlignment from '../../../../static/images/globalAlignment.png';
import HomologySearch from '../../../../static/images/homologySearch.png';
import { Link } from 'react-router-dom';

function Tools(){
    return(
        <div className="Tools">
            <div className="container">
                <div className="row">
                    <h3 className="header center grey-text text-darken-3">Tools</h3>
                    <div className="col s4">
                        <div className="card-panel red lighten-5 hoverable center-align">
                            <img src={LocalAlignment} alt="" width="200" height="200"/>
                            <h3 className="header center grey lighten-1">Alinhamento local</h3>
                            <h6 className="grey-text text-darken-3">Compare um par de sequências para obter seu alinhamento individual e a pontuação referente</h6>
                            <br/>
                            <Link to="local-alignment">
                                <button className="waves-effect waves-light btn left-align pink lighten-1">Vamos lá!</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel red lighten-5 hoverable center-align">
                            <img src={GlobalAlignment} alt="" width="190" height="190"/>
                            <h3 className="header center grey lighten-1">Alinhamento Global</h3>
                            <h6 className="grey-text text-darken-3">Alinhe duas sequências, ambas, do seu início ao fim com o alinhamento global entre elas e a pontuação referente</h6>
                            <br/>
                            <Link to="/global-alignment">
                                <button className="waves-effect waves-light btn left-align pink lighten-1">Vamos lá!</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel red lighten-5 hoverable center-align">
                            <img src={HomologySearch} alt="" width="190" height="190"/>
                            <h3 className="header center grey lighten-1">Busca Homóloga</h3>
                            <h6 className="grey-text text-darken-3">Submeta uma tabela de sequências contra um banco de dados filogeneticamente anotado e receba uma análise comparativa das combinações com maior similiraridade referentes ao alinhamento dessas sequências</h6>
                            <br/>
                            <Link to="/homology-search">
                                <button className="waves-effect waves-light btn left-align pink lighten-1">Vamos lá!</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools;