import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { AboutComponent } from "./components";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <AboutComponent />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
