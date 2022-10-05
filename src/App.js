import logo from './logo.svg';
import './App.css';
import EmailLogo from '../src/assets/nav-icon2.svg';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={EmailLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
