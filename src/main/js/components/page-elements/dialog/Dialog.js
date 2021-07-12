import React from 'react';
import '../../../../static/css/Dialog.css';
import Toolkit  from '../../../infra/Toolkit';

function Dialog (props) {
    const msg = Toolkit.Messages.getMessages;

    const title = props.title;
    const show = props.show;
    const setShow = props.setShow;
    const confirmButtonFunction = props.confirmButtonFunction;
    const cancelButtonFunction = props.cancelButtonFunction;
    const hasConfirmButton = props.hasConfirmButton !== undefined ? props.hasConfirmButton : true;
    var hasCancelButton = props.hasCancelButton !== undefined ? props.hasCancelButton : true;
    const confirmLabel = props.confirmLabel !== undefined ? props.confirmLabel : msg('common.confirmar');
    const cancelLabel = props.cancelLabel !== undefined ? props.cancelLabel : msg('common.cancelar');

    const isShowing = (condition) => {
        return condition ? "dialog show" : "dialog";
    }

    const defaultClose = () => {
        setShow(false);
    }
    
    return (
        <div className={isShowing(show)}>
            <div className="dialog-content">
                <div className="header">
                    {title && <h3>{title}</h3>}
                    <span onClick={() => defaultClose()} className="close">&times;</span>
                </div>
                <div className="text">
                    {props.children}
                </div>
                {(hasConfirmButton || hasCancelButton) &&
                    <div className="footer">
                        <div className="buttons">
                            {hasCancelButton && 
                            (cancelButtonFunction 
                            ?
                                <button 
                                    onClick={() => cancelButtonFunction()} 
                                    className="waves-effect waves-light btn deep-orange darken-1">
                                        {cancelLabel}
                                </button> 
                            : 
                                <button 
                                    onClick={() => defaultClose()} 
                                    className="waves-effect waves-light btn deep-orange darken-1">
                                        {cancelLabel}
                                </button>)}
                            {hasConfirmButton && 
                            (confirmButtonFunction
                            ?
                                <button 
                                    onClick={confirmButtonFunction} 
                                    className="waves-effect waves-light btn lime darken-3">
                                        {confirmLabel}
                                </button>
                            :
                                <button  
                                    onClick={() => defaultClose()}
                                    className="waves-effect waves-light btn lime darken-3">
                                        {confirmLabel}
                                </button>)}                    
                        </div>
                    </div>}
            </div>
        </div>
    );
}

export default Dialog;