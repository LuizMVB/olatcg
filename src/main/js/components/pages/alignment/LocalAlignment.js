import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import '../../../infra/Toolkit';
import Dialog from '../../page-elements/dialog/Dialog';
import Toolkit from '../../../infra/Toolkit';

function LocalAlignment() {

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
      
    const getLocalAlignment = (inputSeq1, inputSeq2, selectSequenceType) => {
        if(validateForm(inputSeq1, inputSeq2, selectSequenceType)){
            setShowProccessDialog(true);
            let formData = new FormData();
            formData.append('seq1', inputSeq1);
            formData.append('seq2', inputSeq2);
            formData.append('gap_open_penalty', 5);
            formData.append('gap_extend_penalty', 2);
            if(selectSequenceType === "dna") {
                fetch(Toolkit.Routes.DNA_LOCAL_ALN, {method: 'POST', body: formData})
                    .then(res => res.json())
                    .then(data => setProcessId(data.processId));
            }
            else if(selectSequenceType === "rna") {
                fetch(Toolkit.Routes.RNA_LOCAL_ALN, {method: 'POST', body: formData})
                    .then(res => res.json())
                    .then(data => setProcessId(data.processId));
            }
            else if(selectSequenceType === "protein") {
                fetch(Toolkit.Routes.PTN_LOCAL_ALN, {method: 'POST', body: formData})
                    .then(res => res.json())
                    .then(data => setProcessId(data.processId));
            }
        } else {
            setShowValidateFailedDialog(true);
        }
    };

    const validateForm = (inputSeq1, inputSeq2, selectSequenceType) => {
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
        <div className="LocalAlignment">
            <div className="container-fluid">
                <div className="row">
                    <div className="col s10 offset-s1">
                        <h3 className="header center grey-text text-darken-5">Alinhamento Local</h3>
                        <br/>
                        <div className="red lighten-5 grey-text text-darken-5">
                            <h6>
                                Utilize as sequências que você deseja alinhar nas caixas de texto a seguir.
                                Aproveite para fazer alterações manuais e ver o quanto os resultados podem 
                                mudam. Além disso, você pode selecionar o algoritmo que deseja utilizar para
                                realizar o alinhamento e as penalidades de abertura e extesão no alinhamento. 
                                Divirta-se! 
                            </h6>
                        </div>
                        <br/>
                        <div className="input-field col s8 offset-s2">
                            <textarea className="materialize-textarea" onChange={event => {setInputSeq1(event.target.value)}}></textarea>
                            <label htmlFor="seq1">Sequência A</label>
                        </div>
                        <div className="col s1 tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">Verifique se as sequências estão com os caracteres corretos antes de enviá-las. <br/>Ex.: A, T, C ou G caso DNA</span>
                        </div>
                        <br/>
                        <div className="input-field col s8 offset-s2">
                            <textarea id="seq1" className="materialize-textarea" onChange={event => {setInputSeq2(event.target.value)}}></textarea>
                            <label htmlFor="seq1">Sequência B</label>
                        </div>
                        <div className="col s1 tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">Verifique se as sequências estão com os caracteres corretos antes de enviá-las. <br/>Ex.: A, T, C ou G caso DNA</span>
                        </div>
                        <div className="input-field col s4">
                            <p>O que você quer alinhar?</p>
                            <select className="browser-default" onChange={event => {setSelectSequenceType(event.target.value)}}>
                                <option value="">Escolha sua opção</option>
                                <option value="dna">DNA</option>
                                <option value="rna">RNA</option>
                                <option value="protein">Proteína</option>
                            </select>         
                        </div>
                        <div className="col s12 center">
                            <br/>
                            <button className="waves-effect waves-light btn" onClick={() => {getLocalAlignment(inputSeq1, inputSeq2, selectSequenceType)}} disabled={disabled}>
                                <i className="material-icons right">insert_chart</i>
                                {msg('alignment.local.button.submmit.alinhar')}
                            </button>
                            <br/>
                            <br/>
                            {processId && <Link to="/task-table" params={{"processId" : processId}}><div className="col s4 center offset-s4 red lighten-5 hoverable"><h4>Ultimo ID: {processId}</h4></div></Link>}
                        </div>
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <Dialog
                title={msg('dialog.default.processamento.title')} 
                show={showProccessDialog} setShow={setShowProccessDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <div className="center">
                        <h5>{msg('dialog.default.alignment.processamento.text1')}</h5>
                        <Link to="task-table/align">
                            <div className="dialog-message red lighten-5 hoverable">
                                <h5>{msg('dialog.default.processamento.text2')}</h5>
                                <h5>{processId && msg('dialog.default.processamento.text3.seuId', processId)}</h5>
                            </div>
                        </Link>
                    </div>
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

export default LocalAlignment;
