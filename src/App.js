import myDictionaryLogo from "./images/myDictionaryLogo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-welcome-text">Welcome to</div>
        <img src={myDictionaryLogo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
