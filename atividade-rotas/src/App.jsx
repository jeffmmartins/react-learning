import Home from './routes/Home';
import {BrowserRouter, Router, Routes} from 'react-router-dom'
import './App.css';

function App() {
   const membros = [
    {
      id: "1",
      name: "Pedro",
      type: "pf"
    },
    {
      id: "2",
      name: "André",
      type: "pf"
    },
    {
      id: "3",
      name: "Cantina da esquina",
      type: "pj"
    },
    {
      id: "4",
      name: "Lanches Ogro",
      type: "pj"
    },
    {
      id: "5",
      name: "Antunes",
      type: "pj"
    }
   ];
  
  return (
    <div className="App">
      <Home membros={membros}/>
      <BrowserRouter>
      
        <Routes path="/customer/:id"/>
        <Routes path="/company/:id"/>
        <Routes path="/"/>
      </BrowserRouter>
    </div>
  );
}

export default App;
