import React, { useEffect, useState } from 'react';
import baseUrl from '../../services/baseUrl';

function TaskTableHomologySearch() {

    const [homologySearchData, setHomologySearchData] = useState(undefined);
    const [itemSelected, setItemSelected] = useState(undefined);
    const [alignData, setAlignData] = useState(undefined);

    useEffect(() => {
        // Runs after the first render() lifecycle
        fetch(baseUrl + '/getHomologySearchTable')
        .then(res => res.json())
        .then(data => 
            {setHomologySearchData(data);});
      }, []);

    const getHomologySearchOutputData = (id) => {
        fetch(baseUrl + '/getHomologySearchOutputTable/' + id)
        .then(res => res.json())
        .then(data =>
            {
                setAlignData(data);
                setItemSelected(true);
            })
    }

    return (
        <div className="col s10 offset-s1">
            {!itemSelected && homologySearchData && 
            <table className="centered highlight purple lighten-5">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Ações</th>
                    </tr>
                </thead>    
                <tbody>
                    {homologySearchData.map((data, index) => (
                        <tr key={index}>
                            <td>{data[0]}</td>
                            <td>{data[1] !== "FALSE" && <button class="waves-effect waves-light btn" onClick={() => {getHomologySearchOutputData(data[0])}}>Veja o Resultado</button> || <span>Carregando...</span>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
            {itemSelected && alignData &&
            <div> 
                <table className="centered highlight purple lighten-5">
                    <thead>
                        <tr>
                            <th>Sequência A (alinhada)</th>
                            <th>Sequência B (alinhada)</th>
                            <th>Similaridade aprox. (%)</th>
                            <th>Taxonomia</th>
                        </tr>
                    </thead>    
                    <tbody>
                    {alignData.map((data, index) => (
                        <tr key={index}>
                            <td>{data[1]}</td>
                            <td>{data[2]}</td>
                            <td>{data[5]}</td>
                            <td>{data[3]}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <br />
                <div class="col s5 push-s10">
                    <button class="waves-effect waves-light btn red" onClick={() => {setItemSelected(undefined)}}>Voltar</button>
                </div>
            </div>}
        </div>
    );
}

export default TaskTableHomologySearch;