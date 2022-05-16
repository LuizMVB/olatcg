import React, {useState, useEffect} from 'react';
import '../../../../static/css/TaskTable.css'
import Toolkit from '../../../infra/Toolkit';
import useRequest from '../../../hooks/useRequest';
import { FormattingService } from '../../../services/FormattingService';

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
    };

    const handleToSameLength = (aln1, aln2) => {
        if(aln2.length >= aln1.length){
            for (let index = aln1.length; index < aln2.length; index++) {
                aln1 += " ";
            }
            return {
                biggestAln: aln2,
                smallestAln: aln1,
            };
        }else if(aln1.length > aln2.length){
            for (let index = aln2.length; index < aln1.length; index++) {
                aln2 += " ";
            }
            return {
                biggestAln: aln1,
                smallestAln: aln2,
            };
        }
    };

    const createJSXTableOfBases = (aln1, aln2) => {
        let tableHeaderClassName;
        let tableDataBase1ClassName;
        let tableDataBase2ClassName;

        let alns = handleToSameLength(aln1, aln2);
        alns.biggestAln.split('').forEach((base, index) => {
            if(base.toUpperCase() === alns.smallestAln[index].toUpperCase()){
                if(base.toUpperCase() === 'A'){
                    tableHeaderClassName = 'bg-color-red';
                    tableDataBase1ClassName = 'bg-color-red';
                    tableDataBase2ClassName = 'bg-color-red';
                }else if(base.toUpperCase() === 'T'){
                    tableHeaderClassName = 'bg-color-blue';
                    tableDataBase1ClassName = 'bg-color-blue';
                    tableDataBase2ClassName = 'bg-color-blue';
                }else if(base.toUpperCase() === 'C'){
                    tableHeaderClassName = 'bg-color-green';
                    tableDataBase1ClassName = 'bg-color-green';
                    tableDataBase2ClassName = 'bg-color-green';
                }else if(base.toUpperCase() === 'G'){
                    tableHeaderClassName = 'bg-color-yellow';
                    tableDataBase1ClassName = 'bg-color-yellow';
                    tableDataBase2ClassName = 'bg-color-yellow';
                }
            }else{
                tableHeaderClassName = 'purple lighten-4';
                tableDataBase1ClassName = 'purple lighten-4';
                tableDataBase2ClassName = 'purple lighten-4';
            }
            tableHeaderAsterisk.push(<th className={tableHeaderClassName}>*</th>);
            tableBodyBase1.push(<td className={tableDataBase1ClassName}>{base}</td>);
            tableBodyBase2.push(<td className={tableDataBase2ClassName}>{alns.smallestAln[index]}</td>); 
        });
    };
    
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
                                    <td>{FormattingService.percentage(itemSelected.similarity)}</td>
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