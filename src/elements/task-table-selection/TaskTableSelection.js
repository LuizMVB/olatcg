import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TaskTableAlign from '../../pages/task-table-align/TaskTableAlign';
import TaskTableHomologySearch from '../../pages/task-table-homology-search/TaskTableHomologySearch';

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