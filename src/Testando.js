import React, {useState, useEffect} from 'react';
import './App.css';
import baseUrl from './services/baseUrl';

function Testando() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch(baseUrl + '/time').then(res => res.json()).then(data => { setCurrentTime(data.time);
    });
  });


  return (
    <div className="App">
      <header className="App-header">
        <h1>Current time {currentTime}</h1>
      </header>
    </div>
  );
}

export default Testando;
