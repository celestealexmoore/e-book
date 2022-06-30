import "../assets/modules/About.css";
import famPhoto from "../assets/photos/about/momnbabe.JPG";
import flour from "../assets/photos/about/flour.png";
import instagram from "../assets/photos/logos/instagram.png";
import facebook from "../assets/photos/logos/facebook.png";
import linkedIn from "../assets/photos/logos/linkedIn.png";
import email from "../assets/photos/logos/email.png";
import vid1 from "../assets/videos/vid1.mp4";
import vid2 from "../assets/videos/vid2.mp4";
import vid3 from "../assets/videos/vid3.mp4";
import vid4 from "../assets/videos/vid4.mp4";
import vid5 from "../assets/videos/vid5.mp4";
import vid6 from "../assets/videos/vid6.mp4";
import vid7 from "../assets/videos/vid7.mp4";
import vid8 from "../assets/videos/vid8.mp4";
import vid9 from "../assets/videos/vid9.mp4";
import vid10 from "../assets/videos/vid10.mp4";
import vid11 from "../assets/videos/vid11.mp4";
import vid12 from "../assets/videos/vid12.mp4";
import bakingLoop from "../assets/videos/bakingLoopLg.mp4";
// import sketchArt from "../assets/photos/about/chefClothes.png";
// import wheat from "../assets/photos/about/wheat.png";
// import eggs from "../assets/photos/about/eggs.png";

export default function About() {
  return (
    <div className="aboutParentContainer">
      <div className="meetMoores container-fluid vph">
        <div className="row">
          <h1 className="col-12 aboutTitle">About</h1>
        </div>

        <div className="spaceBetween"></div>

        <div className="row contentParent d-flex justify-content-evenly">
          <div className="col-5 photoParent" data-aos="fade-right">
            <img
              alt="Author and Baby Girl"
              src={famPhoto}
              className="famPhoto"
            ></img>
          </div>

          <div className="col-5 aboutContent" data-aos="fade-left">
            <h1> Meet the Two Moore's</h1>
            <p>
              A former Pastry Chef, I started writing a book in 2020, (while
              pregnant), of recipes I've been perfecting for over 10 years. I
              told myself that pregnancy would be the end of my culinary
              career—something about long hours on my feet, repetitively lifting
              heavy things for 8-21 hours a day, toxic work environments (simply
              due to our collectively underpaid and overworked dispositions).
              <br />
              <br />
              I wanted a better life for myself, so I went after a different
              career, more personal time, less body-work, more brain-work. I
              couldn't just throw away all that hard-earned experience, though.
              <br />
              <br />
              This website is my way of keeping that looooong, proud, exhale of
              retirement frozen in time. I get to go back to creating for the
              fun of it, and you get to peruse through my best work- sharing
              these gems with your family and friends, for as much as I've
              enjoyed creating those table-gathering moments for you all.
            </p>
          </div>
        </div>
      </div>

      {/* multiple videos show on larger devices */}
      <div className="videoContainerMultiple">
        <div className="container-fluid videoParentMultiple">
          <video autoPlay muted loop id="myVideo">
            <source src={vid1} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid2} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid3} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid4} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid5} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid6} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid7} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid8} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid9} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid10} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid11} type="video/mp4" />
          </video>
          <video autoPlay muted loop id="myVideo">
            <source src={vid12} type="video/mp4" />
          </video>
        </div>
      </div>

      {/* single video shows for mobile devices */}
      <div className="videoContainerSingle">
        <div className="container videoParentSingle">
          <video autoPlay muted loop id="myVideo">
            <source
              src={bakingLoop}
              alt="Video of desserts baking"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      <div className="container-fluid connectInfo d-flex justify-content-center">
        <img alt="flour" src={flour} className="flourPhoto"></img>

        <div className="col-6 connectDiv" data-aos="zoom-out-up">
          <h1>Let's Connect!</h1>
          <div className="iconParent">
            <img
              alt="Instagram Icon"
              src={instagram}
              className="logoIcons"
            ></img>
            <img alt="Facebook Icon" src={facebook} className="logoIcons"></img>
            <img alt="LinkedIn Icon" src={linkedIn} className="logoIcons"></img>
            <img alt="Email icon" src={email} className="logoIcons"></img>
          </div>
          <p>I always love answering a good baking question.</p>
        </div>
      </div>
    </div>
  );
}