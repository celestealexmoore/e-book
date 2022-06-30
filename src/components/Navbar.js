import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/photos/logo.png";
import "../assets/modules/Navbar.css";

const Navbar = () => {

  return (
    <div className="parentContainer">
      <div className="titleParent">
        <img alt="Book Logo" className="logo" src={Logo}></img>
        <h1 className="navTitle">Two Moore Books</h1>
      </div>

      <ul className="navUl">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/About">About</a>
        </li>
        <li className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Books</a>
          <div className="dropdown-menu dropdown-menu-lg-end">
              <a href="#" className="dropdown-item">I'm Daddy's Love</a>
              <a href="/Books" className="dropdown-item">Moore Baking At Home</a>
              <a href="#" className="dropdown-item">Hey Doll Baby</a>
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
