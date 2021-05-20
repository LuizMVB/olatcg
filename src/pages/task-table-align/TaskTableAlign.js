import React, {useState, useEffect} from 'react';
import baseUrl from '../../services/baseUrl';

function TaskTableAlign() {

    const [alignData, setAlignData] = useState(undefined);
    const [itemSelected, setItemSelected] = useState(undefined);

    useEffect(() => {
        // Runs after the first render() lifecycle
        fetch(baseUrl + '/getAlignTable')
        .then(res => res.json())
        .then(data => 
            {setAlignData(data);});
      }, []);
    
    return (
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
                    {alignData.map((data, index) => (
                        <tr key={index}>
                            <td>{data[0]}</td>
                            <td>{data[6] ? data[6] : '-'}</td>
                            <td>{data[5] !== "FALSE" ? <button class="waves-effect waves-light btn" onClick={() => {setItemSelected(data)}}>Veja o Resultado</button> : <span>Carregando...</span>}</td>
                        </tr>
                    ))}
                </tbody>
            </table>}
            {itemSelected &&
            <div> 
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
                            <td>{itemSelected[1]}</td>
                            <td>{itemSelected[2]}</td>
                            <td>{itemSelected[3]}</td>
                            <td>{itemSelected[4]}</td>
                        </tr>
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

export default TaskTableAlign;