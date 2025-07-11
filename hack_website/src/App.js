import logo from './cog.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello and welcome to our website </p>
        <p>Please click one of the following links to view our personal bios:</p>
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
      </header>
    </div>
  );
}

export default App;

 
