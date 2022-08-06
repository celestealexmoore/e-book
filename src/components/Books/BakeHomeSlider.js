import "../../assets/css-styles/Books/bakeHomeSlider.css";
import page1 from "../../assets/photos/baking-at-home/1.png";
import page2 from "../../assets/photos/baking-at-home/2.png";
import page3 from "../../assets/photos/baking-at-home/3.png";
import page4 from "../../assets/photos/baking-at-home/4.png";
import page5 from "../../assets/photos/baking-at-home/5.png";
import page6 from "../../assets/photos/baking-at-home/6.png";
import page7 from "../../assets/photos/baking-at-home/7.png";
import page8 from "../../assets/photos/baking-at-home/8.png";
import page9 from "../../assets/photos/baking-at-home/9.png";
import page10 from "../../assets/photos/baking-at-home/10.png";
import page11 from "../../assets/photos/baking-at-home/11.png";
import page12 from "../../assets/photos/baking-at-home/12.png";
import page13 from "../../assets/photos/baking-at-home/13.png";
import page14 from "../../assets/photos/baking-at-home/14.png";
import page15 from "../../assets/photos/baking-at-home/15.png";
import page16 from "../../assets/photos/baking-at-home/16.png";
import page17 from "../../assets/photos/baking-at-home/17.png";
import page18 from "../../assets/photos/baking-at-home/18.png";
import page19 from "../../assets/photos/baking-at-home/19.png";
import page20 from "../../assets/photos/baking-at-home/20.png";
import page21 from "../../assets/photos/baking-at-home/21.png";
import page22 from "../../assets/photos/baking-at-home/22.png";
import page23 from "../../assets/photos/baking-at-home/23.png";
import page24 from "../../assets/photos/baking-at-home/24.png";
import page25 from "../../assets/photos/baking-at-home/25.png";
import page26 from "../../assets/photos/baking-at-home/26.png";
import page27 from "../../assets/photos/baking-at-home/27.png";
import page28 from "../../assets/photos/baking-at-home/28.png";
import PreferencesHeader from "../PreferencesHeader";

export default function BakeHomeSlider() {
  let index = 0;
  let locations = [
    "Amsterdam, The Netherlands",
    "Sydney, Australia",
    "San Francisco, California",
  ];

  let slides = document.getElementsByClassName("slides");
  let nextArrow = document.getElementById("next");

  let previousArrow = document.getElementById("previous");

  let place = document.getElementById("place");

  let dotsContainer = document.getElementById("dotsContainer");

  let dotArray = document.getElementsByClassName("dots");

  createDots();
  showSlides(index);

  function createDots() {
    for (let i = 0; i < slides.length; i++) {
      let dot = document.createElement("span");
      dot.className = "dots";
      dotsContainer.appendChild(dot);
    }
  }

  function showSlides(x) {
    if (x > slides.length - 1) {
      index = 0;
    }
    if (x < 0) {
      index = slides.length - 1;
    }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dotArray[i].className = "dots";
    }

    slides[index].style.display = "block";
    dotArray[index].className += " activeDot";
    place.innerHTML = locations[index];
  }

  nextArrow.onclick = function () {
    index += 1;
    showSlides(index);
  };

  previousArrow.onclick = function () {
    index -= 1;
    showSlides(index);
  };

  dotArray[0].onclick = showSlides(1);

  return (
    <div className="container-fluid wholeContainer">
      <PreferencesHeader />

      <div>
        <div id="window">
          <div id="slide-container">
            <div class="slides">
              <img class="slide" src={page1}></img>
            </div>

            <div class="slides">
              <img class="slide" src={page2}></img>
            </div>

            <div class="slides">
              <img class="slide" src={page3}></img>
            </div>
            <a id="previous" class="arrow">
              #10094
            </a>
            <a id="next" class="arrow">
              #10095
            </a>
            <div id="text-bar">
              <p id="place"></p>
            </div>
          </div>
          <div id="dotsContainer"></div>
        </div>
      </div>
    </div>
  );
}
