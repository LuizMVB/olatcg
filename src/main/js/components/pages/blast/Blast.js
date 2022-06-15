import Toolkit from "../../../infra/Toolkit";
import '../../../../static/css/Blast.css';
import ValidationService from "../../../services/ValitationService";
import useRequest from "../../../hooks/useRequest";
import { useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "../../page-elements/dialog/Dialog";

const Blast = () => {
    const msg = Toolkit.Messages.getMessages;

    const [makeRequest] = useRequest();
    const [inputSeq, setInputSeq] = useState();
    const [processId, setProcessId] = useState();
    const [isDialogOpened, openDialog] = useState(false);
    const [dialogTitle, setDialogTitle] = useState();
    const [dialogContent, setDialogContent] = useState();

    const blastn = seq => {
        ValidationService.validateDnaSeq(seq) ? makeRequest(Toolkit.Routes.BLASTN, 'POST', seq, undefined, onSuccessBlastn) : showErrorDialog();
    };

    const showErrorDialog = () => {
        setDialogTitle(msg('dialog.default.validacaoFalhou.caracteresInvalidos.title'))
        setDialogContent(<h5>{msg('dialog.default.validacaoFalhou.caracteresInvalidos.text')}</h5>)
        openDialog(true);
    };

    const onSuccessBlastn = responseData => {
        if(!responseData.error){
            setProcessId(responseData.idAnalysis);
            setDialogTitle(msg('dialog.default.processamento.title'));
            setDialogContent(
                <div className="center">
                    <h5>{msg('dialog.default.alignment.processamento.text1')}</h5>
                    <Link to="task-table/homology-search">
                        <div className="dialog-message red lighten-5 hoverable">
                            <h5>{msg('dialog.default.processamento.text2')}</h5>
                            <h5>{msg('dialog.default.processamento.text3.seuId', responseData.idAnalysis)}</h5>
                        </div>
                    </Link>
                </div>
            );
        }else{
            setDialogTitle(msg('common.erroGeral'))
            setDialogContent(<h5>{responseData.errorDescription ? responseData.errorDescription : msg('common.erroGeral')}</h5>);
        }
        openDialog(true);
    };

    return (
        <div className="Blast">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h3 className="header center grey-text text-darken-5">{msg('blast.pageTitle')}</h3>
                        <br/>
                        <div className="red lighten-5 grey-text text-darken-5">
                            <h6>
                                {msg('blast.description')}
                            </h6>
                        </div>
                        <br/>
                        <div className="input-field col s8 offset-s2">
                            <textarea className="materialize-textarea" onChange={event => setInputSeq(event.target.value)}></textarea>
                            <label htmlFor="seq1">{msg('alignment.label.sequeanciaA')}</label>
                        </div>
                        <div className="col s1 tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">{msg('alignment.tooltip.message.text')}<br/>{msg('alignment.tooltip.message.example')}</span>
                        </div>
                        <br/>
                    </div>
                    <div className="col s12 center">
                        <br/>
                        <button 
                            className="waves-effect waves-light btn" 
                            onClick={() => {blastn(inputSeq)}}>
                                <i className="material-icons right">insert_chart</i>
                                {msg('blast.button.submmit')}
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

export default Blast;