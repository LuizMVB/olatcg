import React from 'react';
import LocalAlignment from '../../../../static/images/localAlignment.png';
import GlobalAlignment from '../../../../static/images/globalAlignment.png';
import HomologySearch from '../../../../static/images/homologySearch.png';
import Tree from '../../../../static/images/tree.png'
import { Link } from 'react-router-dom';
import Toolkit from '../../../infra/Toolkit';

function Tools(){
    const msg = Toolkit.Messages.getMessages;

    return(
        <div className="Tools">
            <div className="container">
                <div className="row">
                    <h3 className="header center grey-text text-darken-3">{msg('tools.title')}</h3>
                    <div className="col s4">
                        <div className="card-panel red lighten-5 hoverable center-align">
                            <img src={LocalAlignment} alt="" width="200" height="200"/>
                            <h3 className="header center grey lighten-1">{msg('common.name.tools.alinhamentoLocal')}</h3>
                            <h6 className="grey-text text-darken-3">{msg('tools.card.text.alinhamentoLocal')}</h6>
                            <br/>
                            <Link to="local-alignment">
                                <button className="waves-effect waves-light btn left-align pink lighten-1">{msg('common.button.value.vamosLa')}</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel red lighten-5 hoverable center-align">
                            <img src={GlobalAlignment} alt="" width="190" height="190"/>
                            <h3 className="header center grey lighten-1">{msg('common.name.tools.alinhamentoGlobal')}</h3>
                            <h6 className="grey-text text-darken-3">{msg('tools.card.text.alinhamentoGlobal')}</h6>
                            <br/>
                            <Link to="/global-alignment">
                                <button className="waves-effect waves-light btn left-align pink lighten-1">{msg('common.button.value.vamosLa')}</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel red lighten-5 hoverable center-align">
                            <img src={HomologySearch} alt="" width="190" height="190"/>
                            <h3 className="header center grey lighten-1">{msg('common.name.tools.buscaHomologa')}</h3>
                            <h6 className="grey-text text-darken-3">{msg('tools.card.text.buscaHomologa')}</h6>
                            <br/>
                            <Link to="/homology-search">
                                <button className="waves-effect waves-light btn left-align pink lighten-1">{msg('common.button.value.vamosLa')}</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="card-panel red lighten-5 hoverable center-align">
                            <img src={Tree} alt="" width="190" height="190"/>
                            <h3 className="header center grey lighten-1">{msg('common.name.tools.arvoreFilogenetica')}</h3>
                            <h6 className="grey-text text-darken-3">{msg('tools.card.text.arvoreFilogenetica')}</h6>
                            <br/>
                            <Link to="/phylogenetic-tree">
                                <button className="waves-effect waves-light btn left-align pink lighten-1">{msg('common.button.value.vamosLa')}</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools;