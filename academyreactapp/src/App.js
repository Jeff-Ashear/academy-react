import logo from './logo.svg';
import './App.css';
import './Components/component1.js'
import { Component1 } from './Components/component1.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Codecademy
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <Component1 />
      </div>
    </div>
  );
}

export default App;
