import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-center">
        <h1>COUNTER: 1</h1>
        <div className="panel">
          <button className="increse" onClick={() => {alert("Coming soon..")}}>+</button>
          <button className="decrese" onClick={() => {alert("Coming soon..")}}>-</button>
          <button className="reset" onClick={() => {alert("Coming soon..")}}>RESET</button>
        </div>
      </header>
    </div>
  );
}

export default App;