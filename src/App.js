// current console errors are bootstrap-related bugs.
import "./assets/modules/reset.css";
import "./assets/modules/index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import BakeHome from "./components/BakeHome";
import AOS from "aos";
import "aos/dist/aos.css";
import DollBaby from "./components/DollBaby";
import DaddysLove from "./components/DaddysLove";
import Connect from "./components/Connect";
import Recipes from "./components/Recipes";
AOS.init();
// import Books from "./components/Books";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <Home />;
      break;
    case "/About":
      Component = <About />;
      break;
    case "/BakeHome":
      Component = <BakeHome />;
      break;
    case "/Hey-Doll-Baby":
      Component = <DollBaby />;
      break;
    case "/Im-Daddys-Love":
      Component = <DaddysLove />;
      break;
    case "/Connect":
      Component = <Connect />;
      break;
    case "/Recipes":
      Component = <Recipes />;
      break;
  }
  return (
    <div>
      <Navbar />
      {Component}
    </div>
  );
}

export default App;
