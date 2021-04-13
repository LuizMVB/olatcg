import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function setSelectSequenceType (variavel) {
    console.log(variavel);
}

export default class Select extends Component {
    
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, ['Escolha sua opção', 'Needleman-Wunsch', 'Heurística']);
        });
    }

    render() {
        return (
            <div>
               <select onChange={event => setSelectSequenceType(event.target.value)}>
                    <option value="" disabled selected>Escolha sua opção</option>
                    <option value="dna">DNA</option>
                    <option value="rna">RNA</option>
                    <option value="protein">Proteína</option>
                </select>
                <label>O que você quer alinhar?</label>
            </div>
        )
    }
}