import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => { setCurrentTime(data.time);
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

export default App;
