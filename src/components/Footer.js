import "../assets/css-styles/Footer.css";
import instagram from "../assets/photos/home/icons/instagram.png";
import linkedIn from "../assets/photos/home/icons/linkedIn.png";
import email from "../assets/photos/home/icons/email.png";

export default function Footer() {
  
  function componentDidMount() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <footer className="container-fluid">
        <div className="row footerDiv">
          <ul className="col-sm-6 footerUl">
            <h3>Two Moore Books</h3>
            <li>
              <a href="/About">About</a>
            </li>
            <li>
              <a href="/Connect">Connect</a>
            </li>
            <li>
              <a href="/Recipes">Recipes</a>
            </li>
            <li>
              <a href="/#">Books</a>
            </li>
          </ul>

          <div className="col-sm-6 mediaIcons">
            <a href="https://www.linkedin.com/in/celeste-a-moore-22a036204/">
              <img
                alt="LinkedIn Icon"
                src={linkedIn}
                className="homeLogoIcons"
              ></img>
            </a>
            <a href="mailto: celestealexmoore@gmail.com">
              <img alt="Email icon" src={email} className="homeLogoIcons"></img>
            </a>
            <a href="https://www.instagram.com/celeste.a.moore/">
              <img
                alt="Instagram Icon"
                src={instagram}
                className="homeLogoIcons"
              ></img>
            </a>
          </div>
        </div>

        <p className="copyright">©2023 Two Moore Books. All Rights Reserved.</p>
      </footer>

      <button className="toTopParent" onClick={componentDidMount}>
        <div className="backToTop">
          <i className="bi bi-arrow-up topArrow"></i>
        </div>
        <p>Back to Top</p>
      </button>
    </>
  );
}
