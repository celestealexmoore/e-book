import "../assets/modules/Coffee.css";
import "../assets/modules/Connect.css";
import flour from "../assets/photos/about/flour.png";
import coffee from "../assets/photos/about/coffee.png";
import instagram from "../assets/photos/logos/instagram.png";
import linkedIn from "../assets/photos/logos/linkedIn.png";
import email from "../assets/photos/logos/email.png";

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
        <div className="coffeeContainer">
          <div className="coffee-header">
            <div className="coffee-header__buttons coffee-header__button-one"></div>
            <div className="coffee-header__buttons coffee-header__button-two"></div>
            <div className="coffee-header__display"></div>
            <div className="coffee-header__details"></div>
          </div>
          <div className="coffee-medium">
            <div className="coffee-medium__exit"></div>
            <div className="coffee-medium__arm"></div>
            <div className="coffee-medium__liquid"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
            <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
            <div className="coffee-medium__cup"></div>
          </div>
          <div className="coffee-footer"></div>
        </div>

        <a
          href="https://www.buymeacoffee.com/celeste.a.moore"
          className="buyCoffeeBtn"
          target="_blank"
        >
          <img src={coffee} className="coffeeCup"></img>
          <p>Like all the free content? Refill me!</p>
        </a>

        <div class="elfsight-app-39a606d2-bc38-4eab-a79a-03e288ac8814"></div>
      </div>
    </>
  );
}
