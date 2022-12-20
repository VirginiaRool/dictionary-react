import myDictionaryLogo from "./images/myDictionaryLogo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="App-welcome-text">Welcome to</div>
          <img src={myDictionaryLogo} className="App-logo" alt="logo" />
        </header>
        <Dictionary defaultKeyword="sunset" />
        <footer className="App-footer">
          Open source code on{" "}
          <a
            href="https://github.com/VirginiaRool/dictionary-react"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://dashing-faun-0757dd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>{" "}
          by{" "}
          <a
            href="https://unruffled-archimedes-fea2bd.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Virginia Romero
          </a>
        </footer>
      </div>
    </div>
  );
}
