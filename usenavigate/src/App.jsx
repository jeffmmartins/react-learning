import { BrowserRouter ,  Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Sobre from './components/Sobre';

function App() {
  return (
    
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sobre" element={<Sobre/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
