import myDictionaryLogo from "./images/myDictionaryLogo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <div className="App-welcome-text">Welcome to</div>
          <img src={myDictionaryLogo} className="App-logo" alt="logo" />
        </header>
        <Dictionary />
        <footer className="App-footer">
          <a
            href="https://github.com/VirginiaRool/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>{" "}
          on Github by Virginia Romero
        </footer>
      </div>
    </div>
  );
}
