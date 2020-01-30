import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App" style={{backgroundColor: "#4378"}}>
      <div style={{textAlign: "left"}}>Messengr</div>
      <header className="App-header">
        <p>Enter your name: </p>
        <input></input>
        <br />
        <button type="submit">Click Me</button>
      </header>
    </div>
  );
}

export default App;
