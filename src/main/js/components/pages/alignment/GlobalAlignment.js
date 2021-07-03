import React, {useState} from 'react';
import { Modal, Button, Icon } from 'react-materialize'
import { Link } from 'react-router-dom';
import Toolkit from '../../../infra/Toolkit';
import '../../../../static/css/GlobalAlignment.css';

function GlobalAlignment() {

    const [inputSeq1, setInputSeq1] = useState();

    const [inputSeq2, setInputSeq2] = useState();

    const [selectSequenceType, setSelectSequenceType] = useState();

    const [processId, setProcessId] = useState();

    const getGlobalAlignment = (inputSeq1, inputSeq2, selectSequenceType) => {
        if(validateForm(inputSeq1, inputSeq2, selectSequenceType)){
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
        }
    };

    const validateForm = (inputSeq1, inputSeq2) => {
        if(inputSeq1 && inputSeq2){
            return true;
        }
        return false;
    };

    return (
        <div className="GlobalAlignment">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h3 className="header center grey-text text-darken-5">Alinhamento Global</h3>
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
                            <textarea className="materialize-textarea" onChange={event => setInputSeq1(event.target.value)}></textarea>
                            <label for="seq1">Sequência A</label>
                        </div>
                        <div className="col s1 tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span class="tooltiptext">Verifique se as sequências estão com os caracteres corretos antes de enviá-las. <br/>Ex.: A, T, C ou G caso DNA</span>
                        </div>
                        <br/>
                        <div className="input-field col s8 offset-s2">
                            <textarea id="seq1" className="materialize-textarea" onChange={event => setInputSeq2(event.target.value)}></textarea>
                            <label for="seq1">Sequência B</label>
                        </div>
                        <div className="col s1 tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span class="tooltiptext">Verifique se as sequências estão com os caracteres corretos antes de enviá-las. <br/>Ex.: A, T, C ou G caso DNA</span>
                        </div>
                        <div className="input-field col s6">
                            <p>O que você quer alinhar?</p>
                            <select className="browser-default" onChange={event => setSelectSequenceType(event.target.value)}>
                                <option value="">Escolha sua opção</option>
                                <option value="dna">DNA</option>
                                <option value="rna">RNA</option>
                                <option value="protein">Proteína</option>
                            </select>
                        </div>
                    </div>
                    <div className="col s12 center">
                        <br/>
                        <Modal
                        header='Processamento Iniciado'
                        trigger={<Button waves='light'>Alinhar<Icon right>insert_chart</Icon></Button>}
                        onClick={() => {getGlobalAlignment(inputSeq1, inputSeq2, selectSequenceType)}}>
                            <p>Seu alinhamento está sendo realizado, seu id será exibido na tela</p>
                        </Modal>
                        <br/>
                        <br/>
                        {processId && <Link to="/task-table" params={{"processId" : processId}}><div class="col s4 center offset-s4 red lighten-5 hoverable"><h4>Ultimo ID: {processId}</h4></div></Link>}
                    </div>
                </div>
                <br/>
                <br/>
            </div>
        </div>
    );
}

export default GlobalAlignment;