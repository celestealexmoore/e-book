import "../assets/modules/About.css";
import famPhoto from "../assets/photos/about/momnbabe.JPG";

export default function About() {
  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-12 aboutTitle">About</h1>
      </div>

      <div className="row contentParent d-flex justify-content-around">
        <div className="col-5 photoParent">
          <img
            alt="Photo of Author and Baby Girl"
            src={famPhoto}
            className="famPhoto"
          ></img>
        </div>
        <div className="col-5 aboutContent">
          <h1> Meet the Two Moore's</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

// export default About;
