import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Toolkit from '../../../infra/Toolkit';
import Dialog from '../../page-elements/dialog/Dialog';
import Loading from '../../page-elements/loading/Loading';
import '../../../../static/css/HomologySearch.css';


function HomologySearch(){

    const exampleSequencesContet = "ATTCGGTGGCCGGTGGTGCCAACCGTG\n" + 
    "AAAAGATAGATAGACACAGATAGATAGACACAGTAGAGAGAGATGAGACACACAGATGAGAGATAG\n" + 
    "AAACACAGGTAGAGGAGAGGATTAGGAGAGATGACAGATAGACCCCGCGCTCGCGTCGCTCGCGCTCTCCCCCCTTGGCTCACAGAC\n" + 
    "AGAGACCGCTGGATGACAGATAGATAGACCCCCAGATAGATAAAGGGGTAGATAGATAGATAGAGGACAGTA\n" + 
    "ACAGATTGAGAGTGGCACACGTGGGACACCACAGTTTGTAGATCGATAG\n" + 
    "ACGTGCCAGTAGACGTGAAAGTAGACAGATAGATGGAGATAGAC\n";

    const msg = Toolkit.Messages.getMessages;

    const [errorDialogMessage, setErrorDialogMessage] = useState('');

    const [inputSeqsFile, setInputSeqsFile] = useState();

    const [processId, setProcessId] = useState();

    const [showSuccessDialog, setShowSuccessDialog] = useState(false);

    const [showErrorDialog, setshowErrorDialog] = useState(false);
    
    const [disabled, isDisabled] = useState(true);

    const [loading, isLoading] = useState(false);

    useEffect(() => {
        if(inputSeqsFile) {
            isDisabled(false);
        } else {
            isDisabled(true);
        }
    }, [inputSeqsFile]);

    const validateAndUploadFile = (input) => {
        isLoading(true)
        if(input.type === 'text/plain'){
            let readerBinaryString = new FileReader();
            readerBinaryString.readAsBinaryString(input);
            readerBinaryString.onload = function (evt) {
                if(evt.target.readyState == FileReader.DONE){
                    if(validateTextFileContent(evt.target.result)){
                        let readerDataUrl = new FileReader();
                        readerDataUrl.readAsDataURL(input);
                        readerDataUrl.onload = function(evt){
                            if(evt.target.readyState == FileReader.DONE){
                                uploadSeqsFile(input.name, 'description', evt.target.result);
                            }
                        }
                    } else {
                        setErrorDialogMessage(msg('homologySearch.dialog.error.validacaoFalhou.conteudoArquivoInvalido.text'));
                        setshowErrorDialog(true);
                    }   
                }
            };
        } else {
            setErrorDialogMessage(msg('homologySearch.dialog.validacaoFalhou.formatoArquivoInvalido.text'));
            setshowErrorDialog(true);
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

    const uploadSeqsFile = (name, description, encodedFile) => {
        let data = JSON.stringify({
            name: name,
            description: description,
            encodedFile: encodedFile
          });
        fetch(Toolkit.Routes.GET_TAXONOMY_FROM_SEQUENCES, {
            method: 'POST',
            body: data,
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => {
            isLoading(false);
            if(!data.errorCode){
                setProcessId(data.idAnalysis);
                setShowSuccessDialog(true);
            }else{
                setErrorDialogMessage(msg('homologySearch.dialog.validacaoFalhou.formatoArquivoInvalido.text'));
                setshowErrorDialog(true);
            }
        });
    }

    return (
        <div className="HomologySearch">
            {loading && <Loading freezeScreen={loading}></Loading>}
            <div className="container-fluid">
                <div className="row">
                    <h3 className="header center grey-text text-darken-3">{msg('common.name.tools.buscaHomologa')}</h3>
                    <div className="col s12 center">
                        <p className="grey-text text-darken-3">{msg('homologySearch.label.upload')}</p>
                        <div className="tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">{msg('homologySearch.tooltip.upload.message')}
                            <br/><a download="example_sequences.txt" href={"data:text/plain;base64," + btoa(exampleSequencesContet)}>{msg('common.exemplo')}</a></span>
                        </div>
                        <button className="btn purple lighten-2"><input name="inputSeqsFile" className="file-path validate" type="file" placeholder="Upload one or more files" onChange={event => setInputSeqsFile(event.target.files[0])}/></button>
                        <br/><br/>
                        <div className="col s12 center">
                            <br/>
                            <button className="waves-effect waves-light btn" onClick={() => validateAndUploadFile(inputSeqsFile)} disabled={disabled}>
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
                title={msg('dialog.default.processamento.title')} 
                show={showSuccessDialog} setShow={setShowSuccessDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <div className="center">
                        <h5>{msg('dialog.default.homologySearch.processamento.text1')}</h5>
                        <Link to="task-table/homology-search">
                            <div className="dialog-message red lighten-5 hoverable">
                                <h5>{msg('dialog.default.processamento.text2')}</h5>
                                <h5>{processId && msg('dialog.default.processamento.text3.seuId', processId)}</h5>
                            </div>
                        </Link>
                    </div>
            </Dialog>
            <Dialog
                title={msg('homologySearch.dialog.validacaoFalhou.title')}
                show={showErrorDialog} setShow={setshowErrorDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <h5>{errorDialogMessage}</h5>
            </Dialog>
        </div>
    );
}

export default HomologySearch;