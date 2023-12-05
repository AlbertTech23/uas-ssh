import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
