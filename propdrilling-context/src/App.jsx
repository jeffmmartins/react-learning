
import './App.css';
import Counter from './component/Counter';
import { CounterProvider } from './providers/CounterContext';

function App() {
  return (
    <div className="App">
      <CounterProvider>
        <Counter/>
      </CounterProvider>
    </div>
  );
}

export default App;
