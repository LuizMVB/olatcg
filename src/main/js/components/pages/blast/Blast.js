import Toolkit from "../../../infra/Toolkit";
import '../../../../static/css/Blast.css';
import SystemConstants from "../../../infra/SystemConstants";
import InputFileBox from "../../page-elements/input-file-box/InputFileBox";
import Button from "../../page-elements/button/Button";
import ValidationService from "../../../services/ValitationService";
import useRequest from "../../../hooks/useRequest";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "../../page-elements/dialog/Dialog";

const Blast = () => {
    const msg = Toolkit.Messages.getMessages;

    const [makeRequest] = useRequest();

    const [inputSeqFile, setInputSeqFile] = useState();
    const [processId, setProcessId] = useState();
    const [isDialogOpened, openDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState();
    const [dialogContent, setDialogContent] = useState();
    const [disabled, isDisabled] = useState(true);

    useEffect(() => {
        if(inputSeqFile) {
            isDisabled(false);
        } else {
            isDisabled(true);
        }
    }, [inputSeqFile]);

    const onSuccessUpload = (responseData) => {
        if(responseData.errorCode){
            setDialogTitle(msg('common.erroGeral'));
            setDialogContent(<h5>{responseData.errorDescription ? responseData.errorDescription : msg('common.erroGeral')}</h5>);
            openDialog(true);
        }else{
            setDialogTitle(msg('dialog.default.processamento.title'));
            setDialogContent(<div className="center">
                                <h5>{msg('dialog.default.homologySearch.processamento.text1')}</h5>
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
            name: name,
            description: description,
            encodedFile: encodedFile
          };

        makeRequest(Toolkit.Routes.GET_TAXONOMY_FROM_SEQUENCES, 'POST', uploadRequest, undefined, onSuccessUpload);
    };

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
    };

    return (
        <>
            <div className="Blast">
                <div className="container-fluid">
                    <div className="row">
                        <h3 className="header center grey-text text-darken-3">{msg('common.name.tools.blast')}</h3>
                        <div className="col s12 center">
                            <InputFileBox label={msg('common.seqFile.label.upload')} tooltipMsg={msg('seqFile.tooltip.upload.message')}
                                exampleFileContent={SystemConstants.exampleSeqFile} setInputFile={setInputSeqFile} />
                            <br/><br/>
                            <div className="col s12 center">
                                <br/>
                                <Button label={msg('alignment.local.button.submmit.alinhar')} onClick={(event) => validateAndUploadFile(inputSeqFile)}
                                    icon="insert_chart" disabled={disabled} />
                                <br/>
                                <br/>
                                {processId && <Link to="/task-table/blast" params={{"processId" : processId}}><div className="col s4 center offset-s4 red lighten-5 hoverable"><h4>Ultimo ID: {processId}</h4></div></Link>}
                            </div>
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
        </>
    );
}

export default Blast;