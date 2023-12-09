import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, PageNotFound } from "./pages";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
