import logo from './logo.svg';
import './App.css';
import DadJokes from "./DadJokes";
import Bikes from "./Bikes";
import Clock from "./Clock";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
        <DadJokes />
        <Bikes />
        <Weather />
      </header>
    </div>
  );
}

export default App;
