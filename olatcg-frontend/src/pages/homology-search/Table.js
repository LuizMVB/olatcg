import React, {useState} from 'react';

function Table(props){

    const obj = props.obj;
    const arr = [];

    for (let i = 0;  i < obj.length; i++) {
        arr.push(obj[i]);
    }

    return (
        <div>
            <li>{arr}</li>
        </div>
    )  
}

export default Table;