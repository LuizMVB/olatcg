import React, { useEffect, useState } from 'react';
import Toolkit from '../../../infra/Toolkit';
import Loading from '../../page-elements/loading/Loading';
import Phylocanvas from 'phylocanvas';
import useRequest from '../../../hooks/useRequest';
import SystemConstants from '../../../infra/SystemConstants';

function TaskTableHomologySearch() {

    const msg = Toolkit.Messages.getMessages;
    const [makeRequest] = useRequest();

    const [taxonomySearchAnalysesResponse, setTaxonomySearchAnalysesResponse] = useState(undefined);
    const [alignData, setAlignData] = useState(undefined);
    const [idAnalysis, setIdAanalysis] = useState(undefined);
    const [showTree, setShowTree] = useState(undefined);
    const [leaveTooltip, setShowLeaveTooltip] = useState(undefined);
    const [taxonomy, setTaxonomy] = useState(undefined);

    const generateTree = (idAnalysis) => {
        makeRequest(Toolkit.Routes.GET_NEWICK_FROM_TAXONOMY + '?idAnalysis=' + idAnalysis,
            'POST', undefined, undefined, data => displayTree(data.nwkFormat));
    }

    const displayTree = (nwkFormat) => {
        setShowTree(true);
        let phyloTree = Phylocanvas.createTree("phylocanvas");
        phyloTree.load(nwkFormat);
        phyloTree.setNodeSize(15);
        phyloTree.setTextSize(30);
        phyloTree.setTreeType("rectangular");
        phyloTree.lineWidth = 2;
        phyloTree.shiftKeyDrag = true;
        phyloTree.on('updated', ({ property, nodeIds }) => {
            if (property === 'selected' && phyloTree.branches[nodeIds]) {
                if(phyloTree.branches[nodeIds].selected){
                    makeRequest(Toolkit.Routes.GET_TAXONOMY_FROM_SEQUENCE + '?sequenceId=' + nodeIds,
                                'GET', undefined, undefined, (taxonomy) => setTaxonomy(taxonomy.name), 
                                () => setShowLeaveTooltip(true));
                }else{
                    setTaxonomy('');
                    setShowLeaveTooltip(false);
                }
            }
        });
    };

    useEffect(() => {
        makeRequest(Toolkit.Routes.GET_TAXONOMY_SEARCH_RECORDS, 'GET', undefined, undefined, data => setTaxonomySearchAnalysesResponse(data))
        setInterval(() => makeRequest(Toolkit.Routes.GET_TAXONOMY_SEARCH_RECORDS, 'GET', undefined, undefined, data => setTaxonomySearchAnalysesResponse(data), undefined, false), 5000);
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
                            taxonomySearchRecords.map((record, indexRecord) => 
                                {
                                    let statusMsg = '';
                                    let statusColor = '';
                                    let isOpenResultsButtonDisabled = true;
                                    if(record.status === SystemConstants.STATUS_CARREGAMENTO.STARTED){
                                        statusMsg = msg('common.carregando');
                                        isOpenResultsButtonDisabled = true;
                                    }else if(record.status === SystemConstants.STATUS_CARREGAMENTO.FAILED){
                                        statusMsg = msg('common.erro');
                                        statusColor = '#fce4ec';
                                        isOpenResultsButtonDisabled = true;
                                    }else{
                                        statusMsg = msg('common.concluido');
                                        statusColor = "#c8e6c8"
                                        isOpenResultsButtonDisabled = false;
                                    }

                                    return (
                                        <tr key={indexRecord} style={{backgroundColor: statusColor}}>
                                            <td>{record.idAnalysis}</td>
                                            <td>
                                                {<button 
                                                    className="waves-effect waves-light btn" 
                                                    disabled={isOpenResultsButtonDisabled} 
                                                    onClick={() => {
                                                                        setAlignData(record.alignments); 
                                                                        setIdAanalysis(record.idAnalysis)
                                                                    }}
                                                >
                                                    Veja o Resultado
                                                </button>}
                                            </td>
                                            <td>{statusMsg}</td>
                                        </tr>
                                    )
                                }
                            )}
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
                        <div id="phylocanvas">
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