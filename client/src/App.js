import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Description from "./components/Description";
import Home from "./components/Home";
import Localitation from "./components/Localitation";
import TableBeer from "./components/TableBeer";
import NavBar from "./components/NavBar";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/cervezas" element={<Home />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/location" element={<Localitation />} />
          <Route path="/tablebeer" element={<TableBeer />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/nosotros" element={<Nosotros />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
