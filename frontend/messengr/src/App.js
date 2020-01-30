import React from 'react';
import './App.css';
import ListOfUsers from './Containers/ListOfUsers';

function App() {
  const [clickCount, setClickCount] = React.useState(0);
  const [numUsers, setNumUsers] = React.useState(0);

  const client = React.useRef(new WebSocket('ws://192.168.86.72:1234/ws'));

  client.current.onopen = () => {
    setNumUsers(numUsers + 1);
    console.log('Connection open!')
  };

  client.current.onmessage = (message) => {
    console.log(message);
    setClickCount(Number(message.data));
  };

  client.current.onclose = () => {
    setNumUsers(numUsers - 1);
    console.log('connection closed');
  };

  client.current.onerror = () => {
    console.log('ws error');
  };

  const handleClick = () => {
    client.current.send(clickCount + 1);
  }

  return (
    <div className="App" style={{backgroundColor: "#4378"}}>
      <div style={{textAlign: "left"}}>Messengr</div>
      <header className="App-header">
        <p>Enter your name: </p>
        <input></input>
        <br />
        <button type="submit" onClick={handleClick}>Click Me</button>
        <ListOfUsers />
        <p>{numUsers}</p>
      </header>
    </div>
  );
}

export default App;
