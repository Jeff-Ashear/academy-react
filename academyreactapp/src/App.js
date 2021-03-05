import logo from './logo.svg';
import './App.css';
import './Components/component1.js'
import { Component1 } from './Components/component1.js'
import { Component2 } from './Components/component2.js'
import { Component3 } from './Components/component3.js'
import { Component4 } from './Components/component4.js'
import { Component5 } from './Components/component5.js'
import { Component6 } from './Components/component6.js'
import { Component7 } from './Components/component7.js'

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
        <Component6 />
      </div>
      <div>
        <Component5 />
      </div>
      <div>
        <Component1 />
      </div>
      <div>
        <Component2 />
      </div>
      <div>
        <Component3 />
      </div>
      <div>
        <Component4 firstName="Fonswhimsy"/>
      </div>
      <div>
        <Component7 />
      </div>
    </div>
  );
}

export default App;
