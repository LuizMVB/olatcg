import React from 'react';
import LocalAlignment from '../../../../static/images/localAlignment.png';
import GlobalAlignment from '../../../../static/images/globalAlignment.png';
import HomologySearch from '../../../../static/images/homologySearch.png';
import Blast from '../../../../static/images/blast.png'
import Toolkit from '../../../infra/Toolkit';
import SimpleCard from '../../page-elements/simples-card/SimpleCard';

function Tools() {
    const msg = Toolkit.Messages.getMessages;

    return (
        <div className="Tools">
            <div className="container">
                <div className="row">
                    <h3 className="header center grey-text text-darken-3">{msg('tools.title')}</h3>
                    <div className="col s4">
                        <SimpleCard img={LocalAlignment} title={msg('common.name.tools.alinhamentoLocal')}
                            description={msg('tools.card.text.alinhamentoLocal')} path="/local-alignment" />
                    </div>
                    <div className="col s4">
                        <SimpleCard img={GlobalAlignment} title={msg('common.name.tools.alinhamentoGlobal')}
                            description={msg('tools.card.text.alinhamentoGlobal')} path="/global-alignment" />
                    </div>
                    <div className="col s4">
                        <SimpleCard img={HomologySearch} title={msg('common.name.tools.buscaHomologa')}
                            description={msg('tools.card.text.buscaHomologa')} path="/homology-search" />
                    </div>
                    <div className="col s4">
                        <SimpleCard img={Blast} title={msg('common.name.tools.blast')} 
                            description={msg('tools.card.text.blast')} 
                            path="/blast"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tools;