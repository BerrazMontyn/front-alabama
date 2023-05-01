import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Description from "./components/Description";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/cervezas" element={<Home />} />
          <Route path="/description/:id" element={<Description />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
