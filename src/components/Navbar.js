import "bootstrap-icons/font/bootstrap-icons.css";
import Logo from "../assets/photos/logo.png";
import "../assets/modules/Navbar.css";

const Navbar = () => {
  return (
    <div className="container-fluid navParent">
      <div className="row">
        <div className="col-1">
          <img alt="Book Logo" className="logo" src={Logo}></img>
        </div>
        <div className="col navTitle">Two Moore Books</div>

        <div className="col navUl">
          <div className="row ">
            <a href="#" className="col navLi">
              Home
            </a>
            <a href="#" className="col navLi">
              About
            </a>
            <a href="#" className="col navLi">
              Books
            </a>
            <i className="col bi bi-search"></i>
            {/* <div class="col input-group">
              <div class="form-outline">
                <input type="search" id="form1" class="form-control" />
              </div>
              <button type="button" class="btn btn-primary">
                <i class="bi bi-search"></i>
              </button>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
