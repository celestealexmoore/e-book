import "./assets/modules/reset.css";
import "./assets/modules/index.css";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import About from "./components/About";
import BakeHome from "./components/BakeHome";
import Books from "./components/Books";

function App() {
  return (
    <div>
      <Navbar />
      <About />
      {/* <Featured /> */}
      {/* <BakeHome /> */}
      {/* <Books/> */}
    </div>
  );
}

export default App;
