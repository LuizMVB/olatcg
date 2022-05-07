import React from 'react';
import { Link } from 'react-router-dom';

import '../../../../static/css/TaskTableSelection.css';
import MessagesService from '../../../services/MessagesService';

function TaskTableSelection() {
    const msg = MessagesService.getMessages;
    return (
        <div className="row">
            <br/>
            <div className="col s10 offset-s1 purple lighten-4 TaskTableSelection">
                <div className="col s3 red lighten-5 hoverable center"><h5><Link to="/task-table/align">{msg('common.alinhamento').toUpperCase()}</Link></h5></div>
                <div className="col s3 red lighten-5 hoverable center"><h5><Link to="/task-table/homology-search">{msg('common.taxonomia').toUpperCase()}</Link></h5></div>
                {false && <div className="col s3 red lighten-5 hoverable center"><h5><Link to="/task-table/phylogenetic-tree"></Link></h5></div>}
            </div>
        </div>
        
    );
}   

export default TaskTableSelection;