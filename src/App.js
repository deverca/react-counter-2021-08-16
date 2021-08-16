import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import CounterGroup from './Components/CounterGroup';
import CounterSizeGenerator from './Components/CounterSizeGenerator';
function App() {
  return (
    <div className="App">
      <CounterSizeGenerator></CounterSizeGenerator>
     <CounterGroup></CounterGroup>
    </div>
  );
}

export default App;
