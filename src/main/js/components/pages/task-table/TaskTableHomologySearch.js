import React, { useEffect, useState } from 'react';
import Toolkit from '../../../infra/Toolkit';
import Loading from '../../page-elements/loading/Loading';
import Phylocanvas from 'phylocanvas';

function TaskTableHomologySearch() {

    const msg = Toolkit.Messages.getMessages;

    const [taxonomySearchAnalysesResponse, setTaxonomySearchAnalysesResponse] = useState(undefined);
    const [alignData, setAlignData] = useState(undefined);
    const [idAnalysis, setIdAanalysis] = useState(undefined);
    const [showTree, setShowTree] = useState(undefined);
    const [leaves, setLeaves] = useState(undefined);
    const [leaveTooltip, setShowLeaveTooltip] = useState(undefined);
    const [taxonomy, setTaxonomy] = useState(undefined);

    const generateTree = (idAnalysis) => {
        fetch(Toolkit.Routes.GET_NEWICK_FROM_TAXONOMY + '?idAnalysis=' + idAnalysis,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => res.json())
        .then(data => data.nwkFormat)
        .then(nwk => displayTree(nwk));
    }

    const displayTree = (nwkFormat) => {
        setShowTree(true);
        let phyloTree = Phylocanvas.createTree("phylocanvas");
        phyloTree.load(nwkFormat);
        phyloTree.setNodeSize(15);
        phyloTree.setTextSize(30);
        phyloTree.setTreeType("rectangular");
        phyloTree.lineWidth = 2;
        setLeaves(phyloTree.leaves);
    };

    const onMouseMoveTree = (tree, evt) => {
        let hoveredLeave = tree.filter((leave) => leave.hovered === true)[0];
        if(hoveredLeave){
            /**
            let x = evt.clientX;
            let y = evt.clientY;
        
            document.documentElement.style.setProperty('--mouse-x', x);
            document.documentElement.style.setProperty('--mouse-y', y);
            */

            fetch(Toolkit.Routes.GET_TAXONOMY_FROM_SEQUENCE + '?sequenceId=' + hoveredLeave.id,
            {
                method: 'GET',
                headers: {'Content-Type': 'application/json'}
            })
            .then(res => res.json())
            .then(data => setTaxonomy(data.name))
            .then(setShowLeaveTooltip(true));
        }else{
            setTaxonomy(undefined);
            setShowLeaveTooltip(false);
        }
    }

    useEffect(() => {
        fetch(Toolkit.Routes.GET_TAXONOMY_SEARCH_RECORDS)
        .then(res => res.json())
        .then(data => setTaxonomySearchAnalysesResponse(data));
    }, []);

    return (
        <div className="task-table">
            <div className="col s10 offset-s1">
                {!taxonomySearchAnalysesResponse && 
                    <Loading />
                }
                {!alignData && !showTree && taxonomySearchAnalysesResponse && 
                <table className="centered highlight purple lighten-5">
                    <thead>
                        <tr>
                            <th>{msg('taskTable.homologySearch.column.id')}</th>
                            <th>{msg('taskTable.homologySearch.column.resultados')}</th>
                        </tr>
                    </thead>    
                    <tbody>
                        {taxonomySearchAnalysesResponse.
                            taxonomySearchRecords.map((record, indexRecord) => (
                                <tr key={indexRecord}>
                                    <td>{record.idAnalysis}</td>
                                    <td>{<button className="waves-effect waves-light btn" onClick={() => {setAlignData(record.alignments); setIdAanalysis(record.idAnalysis)}}>Veja o Resultado</button>}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>}
                {!showTree && alignData &&
                <div> 
                    <div className="overflow-table">
                        <table className="centered highlight purple lighten-5 homology-search-table">
                            <thead>
                                <tr>
                                    <th>Identificador Sequência de Entrada</th>
                                    <th>Sequência de Entrada</th>
                                    <th>Sequência Correspondente</th>
                                    <th>Alinhamento (Entrada)</th>
                                    <th>Alinhamento (Correspondente)</th>
                                    <th>Taxonomia</th>
                                    <th>Score</th>
                                    <th>País de Origem</th>
                                    <th>Link NCBI</th>
                                </tr>
                            </thead>    
                            <tbody>
                            {alignData.map((alignment, index) => (
                                <tr key={index}>
                                    <td>
                                        {alignment.inputSequenceId}
                                    </td>
                                    <td>
                                        <div className="aln-column">
                                            {alignment.inputSequence}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="aln-column">
                                            {alignment.matchSequence.bases}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="aln-column">
                                            {alignment.inputAlignment}
                                        </div>
                                    </td>
                                    <td>
                                        <div className="aln-column">
                                            {alignment.matchAlignment}
                                        </div>
                                    </td>
                                    <td>{alignment.taxonomy}</td>
                                    <td>{alignment.score}</td>
                                    <td>{alignment.matchSequence.countryOrigin}</td>
                                    <td>
                                        <a href={"https://www.ncbi.nlm.nih.gov/nuccore/" + alignment.matchSequence.externalDatabaseId}>
                                            {alignment.matchSequence.externalDatabaseId}
                                        </a>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div className="col s7 push-s9">
                        <button className="waves-effect waves-light btn red" onClick={() => {setAlignData(undefined); setIdAanalysis(undefined)}}>Voltar</button>
                        <button className="waves-effect waves-light btn green" onClick={() => {generateTree(idAnalysis)}}>Gerar Árvore</button>
                    </div>
                </div>}
                {showTree &&
                <div className="row">
                    <div className="col s8">
                        <div onMouseMove={event => onMouseMoveTree(leaves, event)} id="phylocanvas">
                        </div>
                    </div>
                    <div className="col s4">
                    {leaveTooltip &&               
                        <table>
                            <thead>
                                <tr>
                                    <th>Taxonomia</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td id="0">{taxonomy}</td>
                                </tr>
                            </tbody>
                        </table>}
                    </div>
                    <div className="col s12 push-s9">
                        <button className="waves-effect waves-light btn red" onClick={() => {setShowTree(false); setShowLeaveTooltip(undefined)}}>Voltar</button>                    
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default TaskTableHomologySearch;