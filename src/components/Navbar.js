import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/photos/navBar/logo.png";
import "../assets/css-styles/Navbar.css";
import { GrMenu } from "react-icons/gr";

const Navbar = () => {
  return (
    <div className="parentContainer">
      <a href="/">
        <div className="titleParent">
          <img alt="Book Logo" className="logo" src={Logo}></img>
          <h1 className="navTitle">Two Moore Books</h1>
        </div>
      </a>

      <div className="navUlParent">
        <ul className="navUl">
          <li>
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/Connect">Connect</a>
          </li>
          <li>
            <a href="/Recipes">Recipes</a>
          </li>
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
            >
              Books
            </a>
            <div className="dropdown-menu dropdown-menu-lg-end">
              <a href="/Im-Daddys-Love" className="dropdown-item">
                I'm Daddy's Love
              </a>
              <a href="/BakeHome" className="dropdown-item">
                Moore Baking At Home
              </a>
              <a href="/Hey-Doll-Baby" className="dropdown-item">
                Hey Doll Baby
              </a>
            </div>
          </li>
          <li>
            <div className="col input-group">
              <div className="form-outline searchBar">
                <input
                  type="search"
                  id="form1"
                  className="form-control shadow bg-white rounded"
                />
              </div>
              {/* <button type="button" className="btn btn searchIcon">
                <i className="bi bi-search"></i>
              </button> */}
            </div>
          </li>
        </ul>
      </div>

      <div className="dropdown hamburgerMenuParent">
        <a href="#" className="hamburgerMenu nav-link ">
          <GrMenu size="30" />
        </a>

        <div className="dropdown-menu dropdown-menu-lg-end">
          <a href="/About" className="dropdown-item">
            About
          </a>
          <a href="/Connect" className="dropdown-item">
            Connect
          </a>
          <a href="/Recipes" className="dropdown-item">
            Recipes
          </a>
          <a href="#" className="dropdown-item">
            Books
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
