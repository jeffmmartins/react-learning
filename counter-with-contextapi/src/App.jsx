import { useContext } from 'react';
import './App.css';
import { CounterContext } from './providers/CounterContext';

function App() {
  const {counter,subtrair, adicionar} = useContext(CounterContext)

  return (
    <div className="App">
      <p>{counter}</p>
     <button onClick={adicionar}>+</button>
     <button onClick={subtrair}>-</button>
    </div>
  );
}

export default App;
