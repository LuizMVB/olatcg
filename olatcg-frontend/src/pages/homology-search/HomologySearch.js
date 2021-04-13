import React, {useState} from 'react';
import baseUrl from '../../services/baseUrl';
import Table from './Table';


function HomologySearch(){

    const [inputSeqsFile, setInputSeqsFile] = useState();

    const [seqAlignmentObject, setAlignmentObject] = useState();

    const uploadSeqsFile = (input) => {
        var data = new FormData();
        data.append('uploaded_seqs_file', input.files[0]);
        data.append('inputSeqsFile', input.name);

        fetch(baseUrl + '/defineTaxSeqsFile', {
            method: 'POST',
            body: data
        }).then(res => res.json()).then(data => {setAlignmentObject(Object.values(data));console.log('ok');});

    }

    const setItems = (data) => {
        let test = [];
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                test.push(<tr> 
                            <td>{data[key].aln1}</td>
                            <td>{data[key].aln2}</td>
                            <td>{data[key].score}</td>
                            <td>{data[key].similarity}</td>
                            <td>{data[key].taxonomy}</td>
                          </tr>);
            }
        }
        return test;
    }

        /**.then((res) => { if(!res.ok) throw new Error(res.statusText); } )

        /**
        .then(res => res.json())
        .then(data => setAlignmentObject(data))
        .catch(() => console.log('lançando modal') /** lançamento de modal);*/

    return (
        <div className="HomologySearch">
            <div className="container-fluid">
                <div className="row">
                    <h3 className="header center grey-text text-darken-3">Busca homóloga</h3>
                    <div className="col s12 center">
                        <p className="grey-text text-darken-3">Faça upload das tabelas geradas em outras iterações aqui: </p>
                        <button className="btn purple lighten-2"><input name="inputSeqsFile" className="file-path validate" type="file" placeholder="Upload one or more files" onChange={event => setInputSeqsFile(event.target)}/></button>
                        <br/><br/>
                        <button className="btn waves-effect waves-light" type="submit" name="action" onClick={() => {uploadSeqsFile(inputSeqsFile)}}>Enviar
                            <i className="material-icons right">send</i>
                        </button> 
                        <br/><br/>
                        {seqAlignmentObject && 
                        <table className="centered highlight purple lighten-5">
                            <thead>
                                <tr>
                                    <th>Sequência A (alinhada)</th>
                                    <th>Sequência B (alinhada)</th>
                                    <th>Score (pontuação)</th>
                                    <th>Similaridade aprox. (%)</th>
                                    <th>taxonomia</th>
                                </tr>
                            </thead>    
                            <tbody>
                                {setItems(seqAlignmentObject)}
                            </tbody>
                        </table>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomologySearch;