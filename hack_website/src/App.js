import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h className="App-header">
        <p>
          Hello and welcome to our website 
        </p>
        <p1>Please click one the following links to view our personal bios:</p1>
        <a
          className="App-link"
          href="Alex.html"
        >
          Alex
        </a>
        <a
        className="App-link"
          href="Andrew.html"
          >
            Andrew
          </a>
          <a
        className="App-link"
          href="Andy.html"
          >
            Andy
          </a>
      </h>
    </div>
  );
}

export default App;
