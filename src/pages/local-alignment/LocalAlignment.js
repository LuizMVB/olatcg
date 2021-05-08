import React, {useState} from 'react';
import baseUrl from '../../services/baseUrl';

function LocalAlignment() {

    const [inputSeq1, setInputSeq1] = useState();

    const [inputSeq2, setInputSeq2] = useState();

    const [selectSequenceType, setSelectSequenceType] = useState();

    const [seqAlignmentObject, setAlignmentObject] = useState();

    const [isLoading, setIsLoading] = useState();

    const getLocalAlignment = (inputSeq1, inputSeq2, selectSequenceType) => {
        setAlignmentObject(undefined)
        setIsLoading(true);
        if(validateForm(inputSeq1, inputSeq2, selectSequenceType)){
            let formData = new FormData();
            formData.append('seq1', inputSeq1);
            formData.append('seq2', inputSeq2);
            formData.append('gap_open_penalty', 5);
            formData.append('gap_extend_penalty', 2);
            if(selectSequenceType === "dna") {
                fetch(baseUrl + '/dnaLocalAlignment', {method: 'POST', body: formData})
                    .then(res => res.json())
                    .then(data => {setAlignmentObject(data); setIsLoading(false); console.log(data)});
            }
            else if(selectSequenceType === "rna") {
                fetch(baseUrl + '/rnaLocalAlignment', {method: 'POST', body: formData})
                    .then(res => res.json())
                    .then(data => {setAlignmentObject(data); setIsLoading(false);});
            }
            else if(selectSequenceType === "protein") {
                fetch(baseUrl + '/proteinLocalAlignment', {method: 'POST', body: formData})
                    .then(res => res.json())
                    .then(data => {setAlignmentObject(data); setIsLoading(false);})
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
                    <div className="input-field col s12">
                        <textarea className="materialize-textarea" onChange={event => setInputSeq1(event.target.value)}></textarea>
                        <label for="seq1">Sequência A</label>
                    </div>
                    <br/>
                    <div className="input-field col s12">
                        <textarea id="seq1" className="materialize-textarea" onChange={event => setInputSeq2(event.target.value)}></textarea>
                        <label for="seq1">Sequência B</label>
                    </div>
                    <div className="input-field col s6">
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
                        <button className="btn waves-effect" type="submit" name="action" onClick={() => {getLocalAlignment(inputSeq1, inputSeq2, selectSequenceType)}}>Alinhar
                            <i className="material-icons right">send</i>
                        </button>
                        <br/><br/>
                    </div>
                </div>
                <div className="col s10 offset-s1">
                    {seqAlignmentObject && 
                    <table className="centered highlight purple lighten-5">
                        <thead>
                            <tr>
                                <th>Sequência A (alinhada)</th>
                                <th>Sequência B (alinhada)</th>
                                <th>Score (pontuação)</th>
                                <th>Similaridade aprox. (%)</th>
                            </tr>
                        </thead>    
                        <tbody>
                            <tr>
                                <td>{seqAlignmentObject.aln1}</td>
                                <td>{seqAlignmentObject.aln2}</td>
                                <td>{seqAlignmentObject.score}</td>
                                <td>{seqAlignmentObject.similarity}</td>
                            </tr>
                        </tbody>
                    </table>}
                </div>
                <div className="col s12 center">
                    {/**isLoading && 
                    <div class="preloader-wrapper big active">
                        <div class="spinner-layer spinner-blue">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div>
                            <div class="circle-clipper right">
                                <div class="circle">
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>
            </div>
            <br/>
            <br/>
        </div>
    );
}

export default LocalAlignment;
