import "../assets/modules/About.css";
import famPhoto from "../assets/photos/about/momnbabe.JPG";

const About = () => {
  return (
    <div className="container-fluid aboutContainer">
        <h1 className="container-fluid aboutTitle">About</h1>
      <div className="container-fluid">
        <div className="pageContent row">
          <img
            alt="Photo of Author and Baby Girl"
            src={famPhoto}
            className="col famPhoto"
          ></img>
          <div className="col d-flex align-items-center">
            <div className="aboutContent">
              <h1> Meet the Two Moore's</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
