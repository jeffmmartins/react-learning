import { useContext } from 'react';
import './App.css';
import { CounterContext } from './providers/CounterContext';
function App() {
  const {counter,setCounter} = useContext(CounterContext)

  const adicionar = () => {
    return setCounter(counter + 1)
  }

  const subtrair = () => {
    return setCounter(counter - 1)
  }

  return (
    <div className="App">
      <p>{counter}</p>
     <button onClick={adicionar}>+</button>
     <button onClick={subtrair}>-</button>
    </div>
  );
}

export default App;
