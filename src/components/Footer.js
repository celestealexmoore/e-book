import "../assets/css-styles/Footer.css";
import instagram from "../assets/photos/home/icons/instagram.png";
import linkedIn from "../assets/photos/home/icons/linkedIn.png";
import email from "../assets/photos/home/icons/email.png";

export default function Footer() {
  return (
    <>
      <footer className="container-fluid">
        <div className="row footerDiv">
          <ul className="col-sm-6 footerUl">
            <h3>Two Moore Books</h3>
            <a href="/About">
              <li>About</li>
            </a>
            <a href="/Connect">
              <li>Connect</li>
            </a>
            <a href="/Recipes">
              <li>Recipes</li>
            </a>
            <a href="#">
              <li>Books</li>
            </a>
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

        <p className="copyright">©2022 Two Moore Books. All Rights Reserved.</p>
      </footer>

      <div className="toTopParent">
        <a href="/" className="backToTop">
          <i class="bi bi-arrow-up topArrow"></i>
        </a>
        <p>Back to Top</p>
      </div>
    </>
  );
}
