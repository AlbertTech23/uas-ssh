import { useState } from "react";
import "./App.css";
import { Navbar, Footer, TodaySpecial } from "./components/index.js";
// import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <Navbar />
      Hello World
      <div className="count text-5xl">
        <span className="">Count: {count}</span>
      </div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      Test */}
      <TodaySpecial />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
