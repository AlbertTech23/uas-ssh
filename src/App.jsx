import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  PageNotFound,
  Appetizers,
  MainCourse,
  Desserts,
  Drinks,
  Reservation,
} from "./pages";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/appetizers" element={<Appetizers />} />
          <Route path="/maincourse" element={<MainCourse />} />
          <Route path="/desserts" element={<Desserts />} />
          <Route path="/drinks" element={<Drinks />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ScrollToTop />
    </div>
  );
}

export default App;
