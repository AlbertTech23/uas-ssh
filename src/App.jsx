import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, PageNotFound, Menu, Reservation } from "./pages";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ScrollToTop />
    </div>
  );
}

export default App;
