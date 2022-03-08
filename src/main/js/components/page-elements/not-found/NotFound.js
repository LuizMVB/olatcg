import React from 'react';
import Toolkit from '../../../infra/Toolkit';
import NotFoundImage from '../../../../static/images/not-found.gif'


function NotFound(){
    const msg = Toolkit.Messages.getMessages;

    return(
        <div className = "container">
            <div className = "row center">
                <div className = "col s12">
                    <h1> {msg('common.title.notFound')} </h1>
                    <img src = {NotFoundImage} width = '350'/>
                    <h4> {msg('common.subtitle.notFound')} </h4>
                </div>
            </div>
        </div>
    );
}

export default NotFound;