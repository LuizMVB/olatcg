import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './elements/nav/Nav';
import Footer from './elements/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Tools from './pages/tools/Tools';
import HomologySearch from './pages/homology-search/HomologySearch';
import GlobalAlignment from './pages/global-alignment/GlobalAlignment';
import LocalAlignment from './pages/local-alignment/LocalAlignment';
import TaskTable from './pages/task-table/TaskTable';

function App(){

  return(
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/tools" component={Tools} />
        <Route path="/homology-search" component={HomologySearch} />
        <Route path="/global-alignment" component={GlobalAlignment} />
        <Route path="/local-alignment" component={LocalAlignment} />
        <Route path="/task-table" exact component={TaskTable} />
        <Route path="/task-table/align" exact component={TaskTable} />
        <Route path="/task-table/homology-search" component={TaskTable} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
