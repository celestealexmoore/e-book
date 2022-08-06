import "../assets/css-styles/About.css";
import famPhoto from "../assets/photos/about/momnbabe2.jpg";
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
// import bakingLoop from "../assets/videos/bakingLoopLg.mp4";
import Footer from "./Footer";
import mooreStory from "../assets/photos/about/mooreStory.png"
import mooreStoryMobile from "../assets/photos/about/mooreStoryMobile.png"

export default function About() {
  return (
    <div className="aboutParentContainer">
      <div className="centerChildren">
        <h1 className="col-12 aboutTitle">About</h1>

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
              told myself that pregnancy would mark the end of my culinary
              career— something about long hours on my feet, lifting heavy
              things for 8-21 hours a day, toxic work environments (simply due
              to our collectively underpaid and overworked dispositions)... I
              mean the list goes on.
              <br />
              <br />
              This website is my way of keeping that looooong, satisfying exhale of
              retirement frozen in time. I get to go back to creating for the
              fun of it, and you get to peruse through my best work- sharing
              these gems with your family and friends as much as I've
              enjoyed creating those table-gathering moments for you all.
            </p>
          </div>
        </div>
      </div>

      <img className="mooreStory" src={mooreStory}></img>
      <img className="mooreStoryMobile" src={mooreStoryMobile}></img>
      

      <svg
        className="svgBorder"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#E6E6E6"
          fillOpacity="1"
          d="M0,96L80,96C160,96,320,96,480,112C640,128,800,160,960,176C1120,192,1280,192,1360,192L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

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
      {/* <div className="videoContainerSingle">
        <div className="container videoParentSingle">
          <video autoPlay muted loop id="myVideo">
            <source
              src={bakingLoop}
              alt="Video of desserts baking"
              type="video/mp4"
            />
          </video>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}
