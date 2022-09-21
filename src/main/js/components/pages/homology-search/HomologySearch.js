import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Toolkit from '../../../infra/Toolkit';
import Dialog from '../../page-elements/dialog/Dialog';
import '../../../../static/css/HomologySearch.css';
import useRequest from '../../../hooks/useRequest';
import ValidationService from '../../../services/ValitationService';

function HomologySearch(){

    const exampleSequencesContet = "ATTCGGTGGCCGGTGGTGCCAACCGTG\n" + 
    "AAAAGATAGATAGACACAGATAGATAGACACAGTAGAGAGAGATGAGACACACAGATGAGAGATAG\n" + 
    "AAACACAGGTAGAGGAGAGGATTAGGAGAGATGACAGATAGACCCCGCGCTCGCGTCGCTCGCGCTCTCCCCCCTTGGCTCACAGAC\n" + 
    "AGAGACCGCTGGATGACAGATAGATAGACCCCCAGATAGATAAAGGGGTAGATAGATAGATAGAGGACAGTA\n" + 
    "ACAGATTGAGAGTGGCACACGTGGGACACCACAGTTTGTAGATCGATAG\n" + 
    "ACGTGCCAGTAGACGTGAAAGTAGACAGATAGATGGAGATAGAC\n";

    const msg = Toolkit.Messages.getMessages;

    const [makeRequest] = useRequest();

    const [inputSeqsFile, setInputSeqsFile] = useState();
    const [processId, setProcessId] = useState();
    const [isDialogOpened, openDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState();
    const [dialogContent, setDialogContent] = useState();
    const [disabled, isDisabled] = useState(true);

    useEffect(() => {
        if(inputSeqsFile) {
            isDisabled(false);
        } else {
            isDisabled(true);
        }
    }, [inputSeqsFile]);

    const validateAndUploadFile = (input) => {
        if(input.type === 'text/plain'){
            let readerBinaryString = new FileReader();
            readerBinaryString.readAsBinaryString(input);
            readerBinaryString.onload = function (evt) {
                if(evt.target.readyState == FileReader.DONE){
                    if(ValidationService.validateSeqFileContent(evt.target.result)){
                        let readerDataUrl = new FileReader();
                        readerDataUrl.readAsDataURL(input);
                        readerDataUrl.onload = function(evt){
                            if(evt.target.readyState == FileReader.DONE){
                                uploadSeqFile(input.name, 'description', evt.target.result);
                            }
                        }
                    } else {
                        setDialogTitle(msg('homologySearch.dialog.validacaoFalhou.title'));
                        setDialogContent(<h5>{msg('homologySearch.dialog.error.validacaoFalhou.conteudoArquivoInvalido.text')}</h5>);
                        openDialog(true);
                    }   
                }
            };
        } else {
            setDialogTitle(msg('homologySearch.dialog.validacaoFalhou.title'));
            setDialogContent(<h5>{msg('homologySearch.dialog.validacaoFalhou.formatoArquivoInvalido.text')}</h5>);
            openDialog(true);
        }
    }

    const onSuccessUpload = (responseData) => {
        if(responseData.error){
            setDialogTitle(msg('common.erroGeral'));
            setDialogContent(<h5>{responseData.errorDescription ? responseData.errorDescription : msg('common.erroGeral')}</h5>);
            openDialog(true);
        }else{
            setDialogTitle(msg('dialog.default.processamento.title'));
            setDialogContent(<div className="center">
                                <h5>{msg('dialog.default.homologySearch.processamento.text1')}</h5>
                                <span>{responseData.description ? responseData.description : ''}</span>
                                <Link to="task-table/homology-search">
                                    <div className="dialog-message red lighten-5 hoverable">
                                        <h5>{msg('dialog.default.processamento.text2')}</h5>
                                        <h5>{msg('dialog.default.processamento.text3.seuId', responseData.idAnalysis)}</h5>
                                    </div>
                                </Link>
                            </div>);
            setProcessId(responseData.idAnalysis);
            openDialog(true);
        }
    }

    const uploadSeqFile = (name, description, encodedFile) => {
        let uploadRequest = {
          databaseType: 'OLATCGDB',
          matchScore: 6,
          mismatchScore: 8,
          sequenceFile: {
            name: name,
            description: description,
            encodedFile: encodedFile
          }
        };
        makeRequest(Toolkit.Routes.GET_TAXONOMY_FROM_SEQUENCES, 'POST', uploadRequest, undefined, onSuccessUpload);
    };

    return (
        <div className="HomologySearch">
            <div className="container-fluid">
                <div className="row">
                    <h3 className="header center grey-text text-darken-3">{msg('common.name.tools.buscaTaxonomia')}</h3>
                    <div className="col s12 center">
                        <p className="grey-text text-darken-3">{msg('common.seqFile.label.upload')}</p>
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
                title={dialogTitle}
                show={isDialogOpened} setShow={openDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    {dialogContent}
            </Dialog>
        </div>
    );
}

export default HomologySearch;
