import React, {useState} from 'react';
import { Modal, Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';
import baseUrl from '../../services/baseUrl';


function HomologySearch(){

    const [inputSeqsFile, setInputSeqsFile] = useState();

    const [processId, setProcessId] = useState();

    const uploadSeqsFile = (input) => {
        var data = new FormData();
        data.append('uploaded_seqs_file', input.files[0]);
        fetch(baseUrl + '/defineTaxSeqsFile', {
            method: 'POST',
            body: data
        }).then(res => res.json())
        .then(data => setProcessId(data.processId));

    }

    return (
        <div className="HomologySearch">
            <div className="container-fluid">
                <div className="row">
                    <h3 className="header center grey-text text-darken-3">Busca homóloga</h3>
                    <div className="col s12 center">
                        <p className="grey-text text-darken-3">Faça upload das tabelas geradas em outras iterações aqui: </p>
                        <button className="btn purple lighten-2"><input name="inputSeqsFile" className="file-path validate" type="file" placeholder="Upload one or more files" onChange={event => setInputSeqsFile(event.target)}/></button>
                        <br/><br/>
                        <div className="col s12 center">
                            <br/>
                            <Modal
                            header='Processamento Iniciado'
                            trigger={<Button waves='light'>Alinhar<Icon right>insert_chart</Icon></Button>}
                            onClick={() => {uploadSeqsFile(inputSeqsFile)}}>
                                <p>Seu alinhamento está sendo realizado, seu id será exibido na tela</p>
                            </Modal>
                            <br/>
                            <br/>
                            {processId && <Link to="/task-table" params={{"processId" : processId}}><div class="col s4 center offset-s4 red lighten-5 hoverable"><h4>Ultimo ID: {processId}</h4></div></Link>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomologySearch;