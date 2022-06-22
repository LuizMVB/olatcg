import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useSelector } from "react-redux";
import Nav from '../../page-elements/nav/Nav';
import Footer from '../../page-elements/footer/Footer';
import Home from '../home/Home';
import About from '../about/About';
import Tools from '../tools/Tools';
import HomologySearch from '../homology-search/HomologySearch';
import GlobalAlignment from '../alignment/GlobalAlignment';
import LocalAlignment from '../alignment/LocalAlignment';
import TaskTable from '../task-table/TaskTable';
import '../../../../static/css/App.css';
import Loading from '../../page-elements/loading/Loading';
import Blast from '../blast/Blast';

function App(){

  const pendingRequestsCount = useSelector(state => state.pendingRequestsCounter)
  const [isLoading, showLoading] = useState(true);

  useEffect(() => {
    if(pendingRequestsCount > 0){
      showLoading(true);
    }else{
      showLoading(false);
    }
  }, [pendingRequestsCount]);

  return (
    <div className="app">
      <Loading show={isLoading}></Loading>
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
            {false && <Route path="/blast" component={Blast} />}
            <Route path="/task-table" exact component={TaskTable} />
            <Route path="/task-table/align" component={TaskTable} />
            <Route path="/task-table/homology-search" component={TaskTable} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;