import "./assets/css-styles/reset.css";
import "./assets/css-styles/index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import BakeHome from "./components/BakeHome";
import BakeHomeSlider from "./components/Books/BakeHomeSlider";
import AOS from "aos";
import "aos/dist/aos.css";
import DollBaby from "./components/DollBaby";
import DaddysLove from "./components/DaddysLove";
import Connect from "./components/Connect";
import Recipes from "./components/Recipes";
import Books from "./components/Books";
import {ThemeProvider} from "./components/ThemeProvider";
AOS.init();

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
    case "/Books":
      Component = <Books />;
      break;
  }

  return (
    <ThemeProvider>
      <Navbar />
      {Component}
    </ThemeProvider>
  );
}

export default App;
