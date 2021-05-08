import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TaskTableSelection from '../../elements/task-table-selection/TaskTableSelection';
import TaskTableAlign from '../task-table-align/TaskTableAlign';
import TaskTableHomologySearch from '../task-table-homology-search/TaskTableHomologySearch';
import baseUrl from '../../services/baseUrl';

function TaskTable() {
    return (
        <div className="container-fluid">
            <div className="row">
                <Router>
                  <TaskTableSelection/>
                    <Switch>
                        <Route path="/task-table" exact component={TaskTableAlign}/>
                        <Route path="/task-table/align" component={TaskTableAlign} />
                        <Route path="/task-table/homology-search" component={TaskTableHomologySearch} />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}   

export default TaskTable;