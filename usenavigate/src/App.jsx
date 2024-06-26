import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Sobre from "./components/Sobre";
import Header from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
