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
        <li>
          <a href="/Books">Books</a>
        </li>
        <li>
          <div class="col input-group">
            <div class="form-outline">
              <input type="search" id="form1" class="form-control shadow bg-white rounded" />
            </div>
            <button type="button" class="btn btn searchIcon">
              <i class="bi bi-search"></i>
            </button>
          </div>
          {/* <i className="col bi bi-search"></i> */}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
