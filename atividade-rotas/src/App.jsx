import Home from './routes/Home';
import {BrowserRouter, Routes} from 'react-router-dom'
import './App.css';
import Company from './routes/Company';
import Customer from './routes/Customer';

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
     
        <Routes path="/customer/:id" element={<Customer/>}/>
        <Routes path="/company/:id" element={<Company/>}/>
        <Routes path="/"/>
      
    </div>
  );
}

export default App;
