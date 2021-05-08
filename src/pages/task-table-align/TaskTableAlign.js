import React, {useState, useEffect} from 'react';
import baseUrl from '../../services/baseUrl';

function TaskTableAlign() {

    const [alignData, setAlignData] = useState(undefined);

    useEffect(() => {
        // Runs after the first render() lifecycle
        fetch(baseUrl + '/getAlignTable')
        .then(res => res.json())
        .then(data => 
            {
                setAlignData(data); 
                console.log(alignData);
            });
      }, []);
    
    return (
        <div className="col s10 offset-s1">
            {alignData && 
            <table className="centered highlight purple lighten-5">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Sequência A (alinhada)</th>
                        <th>Sequência B (alinhada)</th>
                        <th>Score (pontuação)</th>
                        <th>Similaridade aprox. (%)</th>
                    </tr>
                </thead>    
                <tbody>
                    {alignData.map((data, index) => (
                        <tr key={index}>
                            {data.map((element, index) => (
                                <td>{element}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                </table>}
        </div>
    );
}

export default TaskTableAlign;