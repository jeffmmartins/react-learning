import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Company from "./routes/Company";
import Customer from "./routes/Customer";

function App() {
  const members = [
    {
      id: "1",
      name: "Pedro",
      type: "pf",
    },
    {
      id: "2",
      name: "André",
      type: "pf",
    },
    {
      id: "3",
      name: "Cantina da esquina",
      type: "pj",
    },
    {
      id: "4",
      name: "Lanches Ogro",
      type: "pj",
    },
    {
      id: "5",
      name: "Antunes",
      type: "pj",
    },
  ];

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home members={members} />} />
        <Route path="/customer/:id" element={<Customer members={members} />} />
        <Route path="/company/:id" element={<Company members={members} />} />
      </Routes>
    </div>
  );
}

export default App;
