import "./assets/modules/reset.css";
import Navbar from "./components/Navbar";
import Featured from "./components/Featured";
import Books from "./components/Books"

function App() {
  return (
    <div>
      <Navbar />
      <Featured />
      {/* <Books/> */}
    </div>
  );
}

export default App;
