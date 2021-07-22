import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Toolkit from '../../../infra/Toolkit';
import Dialog from '../../page-elements/dialog/Dialog';
import '../../../../static/css/HomologySearch.css';


function HomologySearch(){

    const exampleSequencesContet = "ATTCGGTGGCCGGTGGTGCCAACCGTG\n" + 
    "AAAAGATAGATAGACACAGATAGATAGACACAGTAGAGAGAGATGAGACACACAGATGAGAGATAG\n" + 
    "AAACACAGGTAGAGGAGAGGATTAGGAGAGATGACAGATAGACCCCGCGCTCGCGTCGCTCGCGCTCTCCCCCCTTGGCTCACAGAC\n" + 
    "AGAGACCGCTGGATGACAGATAGATAGACCCCCAGATAGATAAAGGGGTAGATAGATAGATAGAGGACAGTA\n" + 
    "ACAGATTGAGAGTGGCACACGTGGGACACCACAGTTTGTAGATCGATAG\n" + 
    "ACGTGCCAGTAGACGTGAAAGTAGACAGATAGATGGAGATAGAC\n";

    const msg = Toolkit.Messages.getMessages;

    const [inputSeqsFile, setInputSeqsFile] = useState();

    const [processId, setProcessId] = useState();

    const [showProccessDialog, setShowProccessDialog] = useState(false);

    const [showInvalidCharDialog, setshowInvalidCharDialog] = useState(false);

    const [showInvalidFileTypeDialog, setshowInvalidFileTypeDialog] = useState(false)
    
    const [disabled, isDisabled] = useState(true);

    useEffect(() => {
        if(inputSeqsFile) {
            isDisabled(false);
        } else {
            isDisabled(true);
        }
    }, [inputSeqsFile]);

    const validateFile = (input) => {
        if(input.type === 'text/plain'){
            let reader = new FileReader();
            reader.readAsBinaryString(input);
            reader.onload = function () {
                if(validateTextFileContent(reader.result)){
                    uploadSeqsFile(input);
                } else {
                    setshowInvalidCharDialog(true);
                }
            };
        } else {
            setshowInvalidFileTypeDialog(true);
        }
    }

    const validateTextFileContent = (strContent) => {
        let re1 = new RegExp('\n', 'g');
        let re2 = new RegExp('[atcgATCG]', 'g');
        if(strContent.replaceAll(re1, '').replaceAll(re2, '').trim().length === 0) {
            return true;
        }
        return false;
    }

    const uploadSeqsFile = (file) => {
        setShowProccessDialog(true);
        var data = new FormData();
        data.append('uploaded_seqs_file', file);
        fetch(Toolkit.Routes.DEFINE_SEQ_FILE, {
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
                        <div className="tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">Aqui você deve usar como entrada um arquivo .txt, cada linha deve representar uma sequência VÁLIDA (sem caracteres que não fazem parte dela (Ex.: somente "A", "T", "C", "G" caso DNA)).<br/>Você pode encontrar um exemplo <a download="example_sequences.txt" href={"data:text/plain;base64," + btoa(exampleSequencesContet)}>aqui</a></span>
                        </div>
                        <button className="btn purple lighten-2"><input name="inputSeqsFile" className="file-path validate" type="file" placeholder="Upload one or more files" onChange={event => setInputSeqsFile(event.target.files[0])}/></button>
                        <br/><br/>
                        <div className="col s12 center">
                            <br/>
                            <button className="waves-effect waves-light btn" onClick={() => validateFile(inputSeqsFile)} disabled={disabled}>
                                <i className="material-icons right">insert_chart</i>
                                {msg('alignment.local.button.submmit.alinhar')}
                            </button>
                            <br/>
                            <br/>
                            {processId && <Link to="/task-table/homology-search" params={{"processId" : processId}}><div className="col s4 center offset-s4 red lighten-5 hoverable"><h4>Ultimo ID: {processId}</h4></div></Link>}
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                title={msg('homologySearch.dialog.processamento.title')} 
                show={showProccessDialog} setShow={setShowProccessDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <div className="center">
                        <h5>{msg('homologySearch.dialog.processamento.text1')}</h5>
                        <Link to="task-table/homology-search">
                            <div className="dialog-message red lighten-5 hoverable">
                                <h5>{msg('homologySearch.dialog.processamento.text2')}</h5>
                                <h5>{processId && msg('homologySearch.dialog.processamento.text3.seuId', processId)}</h5>
                            </div>
                        </Link>
                    </div>
            </Dialog>
            <Dialog 
                title={msg('homologySearch.dialog.validacaoFalhou.caracteresInvalidos.title')} 
                show={showInvalidCharDialog} setShow={setshowInvalidCharDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <h5>{msg('homologySearch.dialog.validacaoFalhou.caracteresInvalidos.text')}</h5>
            </Dialog>
            <Dialog 
                title={msg('homologySearch.dialog.validacaoFalhou.formatoArquivoInvalido.title')} 
                show={showInvalidFileTypeDialog} setShow={setshowInvalidFileTypeDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <h5>{msg('homologySearch.dialog.validacaoFalhou.formatoArquivoInvalido.text')}</h5>
            </Dialog>
        </div>
    );
}

export default HomologySearch;