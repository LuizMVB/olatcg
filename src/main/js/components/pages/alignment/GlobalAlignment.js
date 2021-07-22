import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Toolkit from '../../../infra/Toolkit';
import '../../../../static/css/GlobalAlignment.css';
import Dialog from '../../page-elements/dialog/Dialog';

function GlobalAlignment() {

    const msg = Toolkit.Messages.getMessages;

    const [inputSeq1, setInputSeq1] = useState();

    const [inputSeq2, setInputSeq2] = useState();

    const [selectSequenceType, setSelectSequenceType] = useState();

    const [processId, setProcessId] = useState();

    const [showProccessDialog, setShowProccessDialog] = useState(false);

    const [showValidateFailedDialog, setShowValidateFailedDialog] = useState(false);

    const [disabled, isDisabled] = useState(true);

    useEffect(() => {
        if(inputSeq1 && inputSeq2 && selectSequenceType) {
            isDisabled(false);
        } else {
            isDisabled(true);
        }
    }, [inputSeq1, inputSeq2, selectSequenceType]);

    const getGlobalAlignment = (inputSeq1, inputSeq2, selectSequenceType) => {
        if(validateForm(inputSeq1, inputSeq2, selectSequenceType)){
            setShowProccessDialog(true);
            let formData = new FormData();
            formData.append('seq1', inputSeq1);
            formData.append('seq2', inputSeq2);
            formData.append('gap_open_penalty', 5);
            formData.append('gap_extend_penalty', 2);
            if(selectSequenceType === "dna") {
                fetch(Toolkit.Routes.DNA_GLOBAL_ALN, {method: 'POST', body: formData})
                    .then(res => res.json())
                    .then(data => setProcessId(data.processId));           
            }
            else if(selectSequenceType === "rna") {
                fetch(Toolkit.Routes.RNA_GLOBAL_ALN, {method: 'POST', body: formData})
                    .then(res => res.json())
                    .then(data => setProcessId(data.processId));            
            }
            else if(selectSequenceType === "protein") {
                fetch(Toolkit.Routes.PTN_GLOBAL_ALN, {method: 'POST', body: formData})
                    .then(res => res.json())
                    .then(data => setProcessId(data.processId));           
            }
        } else {
            setShowValidateFailedDialog(true);
        }
    };

    const validateForm = (inputSeq1, inputSeq2) => {
        let re;
        if(selectSequenceType === 'dna') {
            re = new RegExp('[atcgATCG]', 'g');
        } else if(selectSequenceType === 'rna') {
            re = new RegExp('[aucgAUCG]', 'g');
        } else if(selectSequenceType === 'protein') {
            re = new RegExp('[acdefghiklmnpqrstvwyACDEFGHIKLMNPQRSTVWY]', 'g');
        }
        if(!(inputSeq1.replaceAll(re, '') || inputSeq2.replaceAll(re, ''))) {
            return true;
        }
        return false;
    };

    return (
        <div className="GlobalAlignment">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h3 className="header center grey-text text-darken-5">{msg('alignment.global.pageTitle')}</h3>
                        <br/>
                        <div className="red lighten-5 grey-text text-darken-5">
                            <h6>
                                {msg('alignment.global.description')}
                            </h6>
                        </div>
                        <br/>
                        <div className="input-field col s8 offset-s2">
                            <textarea className="materialize-textarea" onChange={event => setInputSeq1(event.target.value)}></textarea>
                            <label for="seq1">{msg('alignment.global.label.sequeanciaA')}</label>
                        </div>
                        <div className="col s1 tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">{msg('alignment.global.tooltip.message.text')}<br/>{msg('alignment.global.tooltip.message.example')}</span>
                        </div>
                        <br/>
                        <div className="input-field col s8 offset-s2">
                            <textarea id="seq1" className="materialize-textarea" onChange={event => setInputSeq2(event.target.value)}></textarea>
                            <label for="seq1">{msg('alignment.global.label.sequenciaB')}</label>
                        </div>
                        <div className="col s1 tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">{msg('alignment.global.tooltip.message.text')}<br/>{msg('alignment.global.tooltip.message.example')}</span>
                        </div>
                        <div className="input-field col s4">
                            <p>{msg('alignment.global.label.selectBase')}</p>
                            <select className="browser-default" onChange={event => setSelectSequenceType(event.target.value)}>
                                <option value="">{msg('alignment.global.select.option.escolhaOpcao')}</option>
                                <option value="dna">{msg('alignment.global.select.option.dna')}</option>
                                <option value="rna">{msg('alignment.global.select.option.rna')}</option>
                                <option value="protein">{msg('alignment.global.select.option.proteina')}</option>
                            </select>
                        </div>
                    </div>
                    <div className="col s12 center">
                        <br/>
                        <button 
                            className="waves-effect waves-light btn" 
                            onClick={() => {getGlobalAlignment(inputSeq1, inputSeq2, selectSequenceType)}} 
                            disabled={disabled}>
                                <i className="material-icons right">insert_chart</i>
                                {msg('alignment.global.button.submmit.alinhar')}
                        </button>
                        <br/>
                        <br/>
                        {processId && <Link to="/task-table" params={{"processId" : processId}}><div className="col s4 center offset-s4 red lighten-5 hoverable"><h4>Ultimo ID: {processId}</h4></div></Link>}
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <Dialog 
                title={msg('alignment.dialog.processamento.title')} 
                show={showProccessDialog} setShow={setShowProccessDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <h5>{msg('alignment.dialog.processamento.text1')}</h5>
                    <Link to="task-table/align">
                        {msg('alignment.dialog.processamento.text2')}
                    </Link>
            </Dialog>
            <Dialog 
                title={msg('alignment.dialog.validacaoFalhou.title')} 
                show={showValidateFailedDialog} setShow={setShowValidateFailedDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <h5>{msg('alignment.dialog.validacaoFalhou.text')}</h5>
            </Dialog>
        </div>
    );
}

export default GlobalAlignment;