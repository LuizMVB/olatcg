import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Nav from './elements/nav/Nav';
import Footer from './elements/footer/Footer';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Tools from './pages/tools/Tools';
import HomologySearch from './pages/homology-search/HomologySearch'

function App(){

  return(
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/tools" component={Tools} />
          <Route path="/homology-search" component={HomologySearch} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
