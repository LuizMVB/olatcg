import React, { useEffect, useState } from 'react';
import Toolkit from '../../../infra/Toolkit';
import Loading from '../../page-elements/loading/Loading';

function TaskTableHomologySearch() {

    const [homologySearchData, setHomologySearchData] = useState(undefined);
    const [itemSelected, setItemSelected] = useState(undefined);
    const [alignData, setAlignData] = useState(undefined);

    useEffect(() => {
        fetch(Toolkit.Routes.GET_HOMOLOGY_SEARCH_TABLE)
        .then(res => res.json())
        .then(data => 
            {setHomologySearchData(data);});
      }, []);

    const getHomologySearchOutputData = (id) => {
        setItemSelected(true);
        setTimeout(() =>
        {
        fetch(Toolkit.Routes.GET_HOMOLOGY_SEARCH_OUTPUT_TABLE + '/' + id)
        .then(res => res.json())
        .then(data =>
            {
                setAlignData(data);
            })
        }, 5000);
    }

    return (
        <div className="task-table">
            <div className="col s10 offset-s1">
                {!homologySearchData && 
                    <Loading />
                }
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
                                <td>{data[1] === 'TRUE' ? <button className="waves-effect waves-light btn" onClick={() => {getHomologySearchOutputData(data[0])}}>Veja o Resultado</button> : <span>Carregando...</span>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>}
                {itemSelected && !alignData &&
                    <Loading />
                }
                {itemSelected && alignData &&
                <div> 
                    <div className="overflow-table">

                        <table className="centered highlight purple lighten-5 homology-search-table">
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
                                    <td>
                                        <div className="aln-column">
                                            {data[1]}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="aln-column">
                                            {data[1]}
                                        </div>
                                    </td>
                                    <td>{data[5]}</td>
                                    <td>{data[3]}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                   
                    <br />
                    <div className="col s5 push-s10">
                        <button className="waves-effect waves-light btn red" onClick={() => {setItemSelected(undefined)}}>Voltar</button>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default TaskTableHomologySearch;