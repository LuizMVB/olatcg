import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Nav from '../../page-elements/nav/Nav';
import Footer from '../../page-elements/footer/Footer';
import Home from '../home/Home';
import About from '../about/About';
import Tools from '../tools/Tools';
import HomologySearch from '../homology-search/HomologySearch';
import GlobalAlignment from '../alignment/GlobalAlignment';
import LocalAlignment from '../alignment/LocalAlignment';
import PhylogeneticTree from '../phylogenetic-tree/PhylogeneticTree';
import TaskTable from '../task-table/TaskTable';
import '../../../../static/css/App.css';

function App(){

  return(
    <div className="app">
      <Router>
        <Nav />
        <div className="global-row"> 
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/tools" component={Tools} />
            <Route path="/homology-search" component={HomologySearch} />
            <Route path="/global-alignment" component={GlobalAlignment} />
            <Route path="/local-alignment" component={LocalAlignment} />
            <Route path="/phylogenetic-tree" component={PhylogeneticTree} />
            <Route path="/task-table" exact component={TaskTable} />
            <Route path="/task-table/align" component={TaskTable} />
            <Route path="/task-table/homology-search" component={TaskTable} />
            <Route path="/task-table/phylogenetic-tree" component={TaskTable} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;