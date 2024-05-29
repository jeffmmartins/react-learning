
import './App.css';
import { useState} from "react"
import ComponentA from './component/ComponentA';
import ComponentB from './component/ComponentB';

function App() {
  const [example, setExample] = useState("exemplo")

  return (
    <div className="App">
      <ComponentA component={<ComponentB example={example}/>}/>
    </div>
  );
}

export default App;
