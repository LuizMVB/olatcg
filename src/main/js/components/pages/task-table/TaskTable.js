import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TaskTableSelection from '../../page-elements/task-table-selection/TaskTableSelection';
import TaskTableAlign from '../task-table/TaskTableAlign'
import TaskTableHomologySearch from '../task-table/TaskTableHomologySearch';
import TaskTablePhylogeneticTree from '../../pages/task-table/TaskTablePhylogeneticTree';

function TaskTable() {

    if(window.location.pathname === "/task-table") {
        window.location.pathname = "/task-table/align";
    }

    return (
        <div className="container-fluid">
            <div className="row">
            <Router>
                <TaskTableSelection />
                    <Switch>
                        <Route path="/task-table/align" component={TaskTableAlign} />
                        <Route path="/task-table/homology-search" component={TaskTableHomologySearch} />
                        <Route path="/task-table/phylogenetic-tree" component={TaskTablePhylogeneticTree} /> 
                    </Switch>
                </Router>
            </div>
        </div>
    );
}   

export default TaskTable;