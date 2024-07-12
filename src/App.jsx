import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import About from "./Pages/about";
import Projectone from "./Pages/projectone";
import Projecttwo from "./Pages/projecttwo";
import Projectthree from "./Pages/projectthree";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/FEportfolio/" element={<Home />} />
        <Route path="/strejodv.github.io/about" element={<About />} />
        <Route path="/projectone" element={<Projectone />} />
        <Route path="/projecttwo" element={<Projecttwo />} />
        <Route path="/projectthree" element={<Projectthree />} />
      </Routes>
    </Router>
  );

}

export default App
