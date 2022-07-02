import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/photos/logo.png";
import "../assets/modules/Navbar.css";

const Navbar = () => {
  return (
    <div className="parentContainer">
      <a href="/">
        {" "}
        <div className="titleParent">
          <img alt="Book Logo" className="logo" src={Logo}></img>
          <h1 className="navTitle">Two Moore Books</h1>
        </div>
      </a>

      <ul className="navUl">
        <li></li>
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
            <div className="form-outline">
              <input
                type="search"
                id="form1"
                className="form-control shadow bg-white rounded"
              />
            </div>
            <button type="button" className="btn btn searchIcon">
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* <i className="col bi bi-search"></i> */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
