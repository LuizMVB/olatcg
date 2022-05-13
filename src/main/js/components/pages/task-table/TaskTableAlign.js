import React, {useState, useEffect} from 'react';
import '../../../../static/css/TaskTable.css'
import Toolkit from '../../../infra/Toolkit';
import useRequest from '../../../hooks/useRequest';

function TaskTableAlign() {

    const msg = Toolkit.Messages.getMessages;
    const [makeRequest] = useRequest();

    const [alignData, setAlignData] = useState(undefined);
    const [itemSelected, setItemSelected] = useState(undefined);
    const tableBodyAlignData = [];
    const tableHeaderAsterisk = [];
    const tableBodyBase1 = [];
    const tableBodyBase2 = [];

    const onSuccessSearchAlignments = (searchResponse) => {
        setAlignData(searchResponse);
    };

    useEffect(() => { 
        makeRequest(Toolkit.Routes.SEARCH_ALIGNMENTS, 'GET', undefined, undefined, onSuccessSearchAlignments)  
      }, []);

    const createJSXTableBodyAlignData = (alignData) => {
        if(alignData.sequenceAlignmentAnalyses.length > 0){
            alignData.sequenceAlignmentAnalyses.forEach((analysis, index) => {
                tableBodyAlignData.push(<tr key={index}>
                    <td>{analysis.idAnalysis}</td>
                    <td>{analysis.type}</td>
                    <td><button className="waves-effect waves-light btn" onClick={() => {setItemSelected(analysis)}}>Veja o Resultado</button></td>
                </tr>)
            });
        }
    }

    const createJSXTableOfBases = (aln1, aln2) => {
        let maxLengthForBoth = aln1.length;
        let tableHeaderClassName;
        let tableDataBase1ClassName;
        let tableDataBase2ClassName;
        for (let index = 0; index < maxLengthForBoth; index++) {
            let base1 = aln1[index];
            let base2 = aln2[index];
            if (base1 === 'A') {
                tableDataBase1ClassName = 'bg-color-red';
            } else if (base1 === 'T') {
                tableDataBase1ClassName = 'bg-color-green';
            } else if (base1 === 'C') {
                tableDataBase1ClassName = 'bg-color-blue';
            } else if (base1 === 'G') {
                tableDataBase1ClassName = 'bg-color-yellow';
            } else if (base1 === '-') {
                tableDataBase1ClassName = 'purple lighten-4';
            }
            if (base2 === 'A') {
                tableDataBase2ClassName = 'bg-color-red';
            } else if (base2 === 'T') {
                tableDataBase2ClassName = 'bg-color-green';
            } else if (base2 === 'C') {
                tableDataBase2ClassName = 'bg-color-blue';
            } else if (base2 === 'G') {
                tableDataBase2ClassName = 'bg-color-yellow';
            } else if (base2 === '-') {
                tableDataBase2ClassName = 'purple lighten-4';
            }
            if (base1 === base2) {
                tableHeaderClassName = tableDataBase1ClassName;
            } else {
                tableHeaderClassName = undefined;
            }
            tableHeaderAsterisk.push(<th className={tableHeaderClassName}>*</th>);
            tableBodyBase1.push(<td className={tableDataBase1ClassName}>{base1}</td>);
            tableBodyBase2.push(<td className={tableDataBase2ClassName}>{base2}</td>);
        }
    }
    
    return (
        <div className="task-table">
            <div className="container-fluid">
                <div className="row">
                    <div className="col s10 offset-s1">
                        {!itemSelected && alignData && 
                        <table className="centered highlight purple lighten-5">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Tipo</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>    
                            <tbody>
                                {createJSXTableBodyAlignData(alignData)}
                                {tableBodyAlignData}
                            </tbody>
                        </table>}
                    </div>
                    {itemSelected &&
                    <div className="col s10 offset-s1">
                        <div className="table">
                            {createJSXTableOfBases(itemSelected.alignmentA, itemSelected.alignmentB)}
                            <table className="centered highlight purple lighten-5">
                                <thead>
                                    <tr>
                                        <th></th>
                                        {tableHeaderAsterisk}
                                    </tr>
                                </thead>    
                                <tbody>
                                    <tr>
                                        <td><b>Sequência A</b></td>
                                        {tableBodyBase1}
                                    </tr>
                                    <tr>
                                        <td><b>Sequência B</b></td>
                                        {tableBodyBase2}
                                    </tr>
                                </tbody>
                            </table>
                            <br />
                        </div>
                        <br/>
                        <div className="metadata-table-container">
                            <table className="metadata-table">
                                <thead>
                                    <th>{msg('taskTable.align.columns.metadata.score')}</th>
                                    <th>{msg('taskTable.similaridade')}</th>
                                </thead>
                                <tbody>
                                    <td>{itemSelected.score}</td>
                                    <td>{itemSelected.similarity}</td>
                                </tbody>
                            </table>
                        </div>
                        <div className="button-voltar">
                            <button className="waves-effect waves-light btn red" onClick={() => {setItemSelected(undefined)}}>Voltar</button>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
}

export default TaskTableAlign;