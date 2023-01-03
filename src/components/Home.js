import { useState } from "react";
import emailjs from "emailjs-com";
import "../assets/css-styles/Home.css";
import bookTrio from "../assets/photos/home/books.png";
import bookTrioMobile from "../assets/photos/home/booksMobile.png";
import weeklyRecipes from "../assets/photos/home/weeklyRecipes.png";
import CarouselCards from "./CarouselCards";
import Footer from "./Footer";

export default function Featured() {
  const [values, setValues] = useState({});
  console.log(values);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send("service_7pgw3pq", "template_qgz3w8m", values, "hpDy8mTKA36BiLjiw")

      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="fullContainer">
      <div className="featuredElParent">
        <div className="row">
          <div className="col books">
            <img
              src={bookTrio}
              alt="A trio of featured books"
              className="bookTrio"
            ></img>
            <img
              src={bookTrioMobile}
              alt="A trio of featured books"
              className="bookTrioMobile"
            ></img>
          </div>

          <div className="col featuredText">
            <h1 className="featuredTitle">The Wait is Over</h1>
            <div className="lineBreak"></div>
            <p className="description">
              So you've been keeping up with my Instagram for like 5 years now and
              you're all, 
              <span id="audienceNarration"> "How's that book coming along, Brian?"</span> 
              Well, it's finally here. And it's worth the wait! You're able to access all
              my time-consuming content for the free...and I'm so happy to share
              these gifts with you!
              <br />
              <br />
              Two Moore Books is my attempt to capture and preserve moments of
              my life most dear to me. Here, you'll find a ton of both pastry
              and dinner recipes: some super southern, some vegan, gluten-free,
              even some for lactating mamas! You'll also find an array of
              children's books with topics ranging from bedtime and potty-time
              routines to handling deep grief.
              <br />
            </p>
            <a href="./About">
              <button className="readMore">READ MORE</button>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid featuredRecipesParent">
        <h1 className="featuredRecipesTitle">
          Most Requested <span>Recipes</span>
        </h1>
        <CarouselCards />
      </div>

      <div className="container-fluid bottomFeature">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src={weeklyRecipes}
              alt="Weekly Recipes Subscription Ad"
              data-aos="zoom-in"
              className="weeklyRecipes"
            ></img>
          </div>

          <div className="col-md-6 rightFeature">
            <div className="subscribeTitle">
              Join our <span>Clique</span>
            </div>
            <p className="subscribeText">
              Subscribe now to get first dibs on weekly content and new book
              releases! Enter your email, and we'll send it right over!
            </p>

            <form onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control shadow bg-white rounded"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control shadow bg-white rounded"
                  name="userEmail"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                  onChange={handleChange}
                ></input>
              </div>

              <button type="submit" className="submitEmail">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
