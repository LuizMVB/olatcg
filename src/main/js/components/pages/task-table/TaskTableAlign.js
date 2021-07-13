import React, {useState, useEffect} from 'react';
import Toolkit from '../../../infra/Toolkit';
import Loading from '../../page-elements/loading/Loading';
import '../../../../static/css/TaskTable.css'

function TaskTableAlign() {

    const [alignData, setAlignData] = useState(undefined);
    const [itemSelected, setItemSelected] = useState(undefined);
    const tableBodyAlignData = [];
    const tableHeaderAsterisk = [];
    const tableBodyBase1 = [];
    const tableBodyBase2 = [];

    useEffect(() => { 
        fetch(Toolkit.Routes.GET_ALIGN_TABLE)
        .then(res => res.json())
        .then(data => 
            {setAlignData(data)});   
      }, []);

    const createJSXTableBodyAlignData = (alignData) => {
        for(const key in alignData) {
            if (Object.hasOwnProperty.call(alignData, key)) {
                const element = alignData[key];
                tableBodyAlignData.push(<tr key={key}>
                                            <td>{key}</td>
                                            <td>{element.aln_type ? element.aln_type : '-'}</td>
                                            <td>{element.is_loaded === 'TRUE' ? <button className="waves-effect waves-light btn" onClick={() => {setItemSelected(element)}}>Veja o Resultado</button> : <span>Carregando...</span>}</td>
                                        </tr>);
            }
        }
        tableBodyAlignData.reverse();
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
            <div className="col s10 offset-s1">
                {!alignData &&
                    <Loading />
                }
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
                {itemSelected &&
                <>
                    <div className="table">
                        {createJSXTableOfBases(itemSelected.aln1, itemSelected.aln2)}
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
                    <br />
                    <div className="col s5 push-s10">
                        <button className="waves-effect waves-light btn red" onClick={() => {setItemSelected(undefined)}}>Voltar</button>
                    </div>
                </>}
            </div>
        </div>
    );
}

export default TaskTableAlign;