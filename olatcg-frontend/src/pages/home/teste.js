import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import baseUrl from '../../services/baseUrl';
import './Home.css';


function Home() {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        fecthItens();
    }, []);

    const fecthItens = async() => {
        const data = await fetch(baseUrl + '/get_tools');
        const tools = await data.json();
        console.log(tools);
        setTools(tools);
    }

    return (
        <div>
            <h1>home page</h1>
            {tools.map(tool => (
                <h1 key = {tool.id}>
                    <Link to={'/'+tool.id}>
                        {tool.name} is {tool.type}
                    </Link>
                </h1>
            ))}
        </div>
    )
}

export default Home;