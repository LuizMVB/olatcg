import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Toolkit from '../../../infra/Toolkit';
import '../../../../static/css/PhylogeneticTree.css';
import Dialog from '../../page-elements/dialog/Dialog';

function PhylogeneticTree () {

    const msg = Toolkit.Messages.getMessages;

    const [inputSeqFile, setInputSeqFile] = useState();
    const [disabled, isDisabled] = useState(false);
    const [processId, setProcessId] = useState();
    const [showInvalidCharDialog, setshowInvalidCharDialog] = useState(false);
    const [showProccessDialog, setShowProccessDialog] = useState(false);

    useEffect(() => {
        if(inputSeqFile) {
            isDisabled(false);
        } else {
            isDisabled(true);
        }
    }, [inputSeqFile]);

    const createTree = (file) => {
        var data = new FormData();
        data.append('annotated_seq_file', file);
        fetch(Toolkit.Routes.CREATE_TREE, {
            method: 'POST',
            body: data
        })
        .then(res => res.json())
        .then(data => setProcessId(data.processId));
    }

    const validateFile = (file) => {
        let reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function() {
            // eslint-disable-next-line no-control-regex
            var re = new RegExp('>{1}.*[\n\t][-atcgATCG]*[\n\t]', 'g');
            if(reader.result.replaceAll(re, '').length === 0){
                createTree(file);
                setShowProccessDialog(true);
            } else {
                setshowInvalidCharDialog(true);
            }
        };
    } 

    return (
        <div className="phylogenetic-tree">
            <div className="container-fluid">
                <div className="row">
                    <h3 className="header center grey-text text-darken-3">{msg('common.name.tools.arvoreFilogenetica')}</h3>
                    <div className="col s12 center">
                        <p className="grey-text text-darken-3">{msg('phylogeneticTree.textLabel.upload')}</p>
                        <div className="tooltip">
                            <button className="btn-floating amber"><i className="material-icons grey-text text-darken-3">help_outline</i></button>
                            <span className="tooltiptext">{msg('phylogeneticTree.tooltip.text')}</span>
                        </div>
                        <button className="btn purple lighten-2"><input name="inputSeqsFile" className="file-path validate" type="file" placeholder="Upload one or more files" onChange={event => setInputSeqFile(event.target.files[0])}/></button>
                        <br/><br/>
                        <div className="col s12 center">
                            <br/>
                            <button className="waves-effect waves-light btn" onClick={() => validateFile(inputSeqFile)} disabled={disabled}>
                            {msg('phylogeneticTree.button.gerarArvore')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Dialog
                title={msg('dialog.default.processamento.title')} 
                show={showProccessDialog} setShow={setShowProccessDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <div className="center">
                        <h5>{msg('dialog.default.tree.processamento.text1')}</h5>
                        <Link to="task-table/phylogenetic-tree">
                            <div className="dialog-message red lighten-5 hoverable">
                                <h5>{msg('dialog.default.processamento.text2')}</h5>
                                <h5>{processId && msg('dialog.default.processamento.text3.seuId', processId)}</h5>
                            </div>
                        </Link>
                    </div>
            </Dialog>
            <Dialog 
                title={msg('phylogeneticTree.dialog.validacaoFalhou.caracteresInvalidos.title')} 
                show={showInvalidCharDialog} setShow={setshowInvalidCharDialog} 
                confirmLabel={msg('common.ok')} 
                hasCancelButton={false}>
                    <h5>{msg('phylogeneticTree.dialog.validacaoFalhou.caracteresInvalidos.text')}</h5>
            </Dialog>
        </div>
    );
}

export default PhylogeneticTree;