import React from 'react';
import { Link } from 'react-router-dom';

function TaskTableSelection() {
    return (
        <div className="container-fluid">
            <div className="row">
                <br/>
                <div className="col s10 offset-s1 purple lighten-4">
                    <div className="col s2 red lighten-5 hoverable center"><h5><Link to="/task-table/align">Alinhamento</Link></h5></div>
                    <div className="col s2 red lighten-5 hoverable center"><h5><Link to="/task-table/homology-search">Homologia</Link></h5></div>
                </div>
            </div>
        </div>
    );
}   

export default TaskTableSelection;