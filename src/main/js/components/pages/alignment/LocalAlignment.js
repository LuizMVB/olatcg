import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Toolkit from '../../../infra/Toolkit';
import '../../../../static/css/Alignment.css';
import Dialog from '../../page-elements/dialog/Dialog';
import useRequest from '../../../hooks/useRequest';

function LocalAlignment() {

    const msg = Toolkit.Messages.getMessages;
    const [makeRequest] = useRequest();

    const [inputSeq1, setInputSeq1] = useState();
    const [inputSeq2, setInputSeq2] = useState();
    const [selectSequenceType, setSelectSequenceType] = useState('dna');
    const [processId, setProcessId] = useState();
    const [isDialogOpened, openDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState();
    const [dialogContent, setDialogContent] = useState();
    const [disabled, isDisabled] = useState(true);

    useEffect(() => {
        if(inputSeq1 && inputSeq2 && selectSequenceType) {
            isDisabled(false);
        } else {
            isDisabled(true);
        }
    }, [inputSeq1, inputSeq2, selectSequenceType]);

    const validateForm = (inputSeq1, inputSeq2) => {
        let re;
        if(selectSequenceType.toUpperCase() === 'DNA') {
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

    const onSuccessAlign = (responseData) => {
        if(!responseData.errorCode){
            setProcessId(responseData.idAnalysis);
            setDialogTitle(msg('dialog.default.processamento.title'));
            setDialogContent(<div className="center">
                                <h5>{msg('dialog.default.alignment.processamento.text1')}</h5>
                                <Link to="task-table/align">
                                    <div className="dialog-message red lighten-5 hoverable">
                                        <h5>{msg('dialog.default.processamento.text2')}</h5>
                                        <h5>{msg('dialog.default.processamento.text3.seuId', responseData.idAnalysis)}</h5>
                                    </div>
                                </Link>
                            </div>);
        }else{
            setDialogTitle(msg('common.erroGeral'))
            setDialogContent(<h5>{responseData.errorDescription ? responseData.errorDescription : msg('common.erroGeral')}</h5>);
        }
        openDialog(true);
    };

    const getLocalAlignment = (inputSeq1, inputSeq2, selectSequenceType) => {
        if(validateForm(inputSeq1, inputSeq2, selectSequenceType)){
            let bodyRequestAlignment = {
                sequenceA: inputSeq1,
                sequenceB: inputSeq2,
                type: 'LOCAL'
            };
            makeRequest(Toolkit.Routes.ALIGN, 'POST', bodyRequestAlignment, undefined, onSuccessAlign, undefined);
        } else {
            setDialogTitle(msg('dialog.default.validacaoFalhou.caracteresInvalidos.title'))
            setDialogContent(<h5>{msg('dialog.default.validacaoFalhou.caracteresInvalidos.text')}</h5>)
            openDialog(true);
        }
    };

    return (
        <div className="Alignment">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h3 className="header center grey-text text-darken-5">{msg('common.name.tools.alinhamentoLocal')}</h3>
                        <br/>
                        <div className="red lighten-5 grey-text text-darken-5">
                            <h6>
                                {msg('alignment.description')}
                            </h6>
                        </div>
                        <br/>
                        <div className="input-field col s8 offset-s2">
                            <textarea className="materialize-textarea" onChange={event => setInputSeq1(event.target.value)}></textarea>
                            <label htmlFor="seq1">{msg('alignment.label.sequeanciaA')}</label>
                        </div>
                        <div className="col s1 tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">{msg('alignment.tooltip.message.text')}<br/>{msg('alignment.tooltip.message.example')}</span>
                        </div>
                        <br/>
                        <div className="input-field col s8 offset-s2">
                            <textarea id="seq1" className="materialize-textarea" onChange={event => setInputSeq2(event.target.value)}></textarea>
                            <label htmlFor="seq1">{msg('alignment.label.sequenciaB')}</label>
                        </div>
                        <div className="col s1 tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">{msg('alignment.tooltip.message.text')}<br/>{msg('alignment.tooltip.message.example')}</span>
                        </div>
                        {/**<div className="input-field col s4">
                            <p>{msg('alignment.label.selectBase')}</p>
                            <select className="browser-default" onChange={event => setSelectSequenceType(event.target.value)}>
                                <option value="">{msg('alignment.select.option.escolhaOpcao')}</option>
                                <option value="dna">{msg('alignment.select.option.dna')}</option>
                                <option value="rna">{msg('alignment.select.option.rna')}</option>
                                <option value="protein">{msg('alignment.select.option.proteina')}</option>
                            </select>
                        </div>*/}
                    </div>
                    <div className="col s12 center">
                        <br/>
                        <button 
                            className="waves-effect waves-light btn" 
                            onClick={() => {getLocalAlignment(inputSeq1, inputSeq2, selectSequenceType)}} 
                            disabled={disabled}>
                                <i className="material-icons right">insert_chart</i>
                                {msg('alignment.button.submmit.alinhar')}
                        </button>
                        <br/>
                        <br/>
                        {processId && <Link to="/task-table" params={{"processId" : processId}}>
                            <div className="col s4 center offset-s4 red lighten-5 hoverable">
                                <h4>{msg('alignment.dialog.ultimoId', processId)}</h4>
                            </div>
                        </Link>}
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <Dialog
                title={dialogTitle} 
                show={isDialogOpened} setShow={openDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    {dialogContent}
            </Dialog>
        </div>
    );
}

export default LocalAlignment;