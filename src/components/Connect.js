import "../assets/css-styles/Connect.css";
import Coffee from "./Coffee";
import flour from "../assets/photos/about/flour.png";
import coffee from "../assets/photos/about/coffee.png";
import instagram from "../assets/photos/logos/instagram.png";
import linkedIn from "../assets/photos/logos/linkedIn.png";
import email from "../assets/photos/logos/email.png";
import Widget from "../components/chatWidget/Widget";

export default function Connect() {
  return (
    <>
      <div className="container-fluid connectInfo d-flex justify-content-center">
        <img alt="flour" src={flour} className="flourPhoto"></img>

        <div className="col-6 connectDiv" data-aos="zoom-out-up">
          <h1>Let's Connect!</h1>
          <div className="iconParent">
            <a href="https://www.linkedin.com/in/celeste-a-moore-22a036204/">
              <img
                alt="LinkedIn Icon"
                src={linkedIn}
                className="logoIcons"
              ></img>
            </a>
            <a href="mailto: celestealexmoore@gmail.com">
              <img alt="Email icon" src={email} className="logoIcons"></img>
            </a>
            <a href="https://www.instagram.com/celeste.a.moore/">
              <img
                alt="Instagram Icon"
                src={instagram}
                className="logoIcons"
              ></img>
            </a>
          </div>
          <p>I always love answering a good baking question.</p>
        </div>
      </div>

      <div className="coffeeParent">
        <a
          href="https://www.buymeacoffee.com/celeste.a.moore"
          className="buyCoffeeBtn"
          target="_blank"
        >
          <img src={coffee} className="coffeeCup"></img>
          <p>Like the free content? Refill me!</p>
        </a>

        <Coffee />

        <Widget />
      </div>
    </>
  );
}
