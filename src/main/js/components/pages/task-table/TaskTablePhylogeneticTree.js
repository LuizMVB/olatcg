import { useEffect, useState } from 'react';
import Toolkit from '../../../infra/Toolkit';
import Phylocanvas from 'phylocanvas';
import Loading from '../../page-elements/loading/Loading';
import '../../../../static/css/TaskTablePhylogeneticTree.css';
import useRequest from '../../../hooks/useRequest';

function TaskTablePhylogeneticTree() {

    const msg = Toolkit.Messages.getMessages;
    const [makeRequest] = useRequest();

    const [phylogeneticTreeData, setPhylogeneticTreeData] = useState(undefined);
    const [itemSelected, setItemSelected] = useState(undefined);
    const [idSelected, setIdSelected] = useState(undefined);

    const getJSXPhylogeneticTreeTableBody = (phyloTreeData) => {
        let phylogeneticTreeTableBody = [];
        for (const key in phyloTreeData) {
            if (Object.hasOwnProperty.call(phyloTreeData, key)) {
                const element = phyloTreeData[key];
                phylogeneticTreeTableBody.push(<tr key={key}>
                                                    <td>{key}</td>
                                                    <td>
                                                    <button className="waves-effect waves-light btn" onClick={() => displayTree(key, element.nwkFormat)}>{msg('common.button.vejaOResultado')}</button>
                                                    </td>
                                                </tr>);
            }
        }
        return phylogeneticTreeTableBody.reverse();
    }

    const displayTree = (id, nwkFormat) => {
        setIdSelected(id);
        const tree = Phylocanvas.createTree("phylocanvas");
        tree.load(nwkFormat);
        tree.setNodeSize(15);
        tree.setTextSize(30);
        tree.setTreeType("rectangular");
        tree.lineWidth = 3;
        setItemSelected(true);
    };

    /**
    const getJSXPhylogeneticAnnotationTableBody = (idSelected) => {
        let phylogeneticAnnotatioTableBody = [];
        let data = phylogeneticTreeData[idSelected];
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                const element = data[key];
                console.log(element);
                phylogeneticAnnotatioTableBody.push(<tr>
                                                        <td>{element.id}</td>
                                                        <td>{element.annotatedSeqFile}</td>
                                                    </tr>);
            }
        }
        return phylogeneticAnnotatioTableBody;
    }
    */

    const voltar = () => {
        window.location.pathname = "/task-table/phylogenetic-tree"
    }

    useEffect(() => {
        makeRequest(Toolkit.Routes.GET_TREES, 'GET', 
            undefined, undefined, data => setPhylogeneticTreeData(data));
    }, []);
   
    return (
        <div className="task-table-phylogenetic-tree">
            <div className="container-fluid">
                <div className="row">
                    <div className="col s10 offset-s1">
                        {!phylogeneticTreeData &&
                            <Loading />
                        }
                        {!itemSelected && phylogeneticTreeData &&
                        <table className="centered highlight purple lighten-5">
                            <thead>
                                <tr>
                                    <th>{msg("taskTable.phylogeneticTree.columns.metadata.id")}</th>
                                    <th>{msg("taskTable.phylogeneticTree.columns.metadata.Acoes")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getJSXPhylogeneticTreeTableBody(phylogeneticTreeData)}                        
                            </tbody>
                        </table>
                        }
                    </div>
                </div>
                {itemSelected &&
                <div className="tree-title">
                    <h4 className="center">
                        {msg('taskTable.phylogeneticTree.title.idArvore', idSelected)}
                    </h4>
                </div>
                }
                <div id="phylocanvas"></div>
                {itemSelected &&
                <>
                {/**<table>
                    <thead>
                        <tr>
                            <th>{msg("taskTable.phylogeneticTree.columns.metadata.id")}</th>
                            <th>{msg("taskTable.phylogeneticTree.columns.metadata.filogenia")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getJSXPhylogeneticAnnotationTableBody(idSelected)}
                    </tbody>
                </table>*/}
                <div className="col s5 push-s10">
                    <br/><br/>
                    <button className="waves-effect waves-light btn red" onClick={() => {voltar(false)}}>Voltar</button>
                </div>
                </>
                }
            </div>
        </div>
    );
}

export default TaskTablePhylogeneticTree;