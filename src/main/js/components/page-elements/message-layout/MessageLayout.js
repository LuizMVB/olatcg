import React from 'react';

function MessageLayout(props) {
    const message = props.message;
    return (
        <div className="center">
            <h1>{message}</h1>
        </div>
    );
}

export default MessageLayout;