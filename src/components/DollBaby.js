import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import { BsChevronDoubleDown } from "react-icons/bs";
import "../assets/css-styles/dollBaby.css";
import page1 from "../assets/photos/hey-doll-baby/1.png";
import page2 from "../assets/photos/hey-doll-baby/2.png";
import page3 from "../assets/photos/hey-doll-baby/3.png";
import page4 from "../assets/photos/hey-doll-baby/4.png";
import page5 from "../assets/photos/hey-doll-baby/5.png";
import page6 from "../assets/photos/hey-doll-baby/6.png";
import page7 from "../assets/photos/hey-doll-baby/7.png";
import page8 from "../assets/photos/hey-doll-baby/8.png";
import page9 from "../assets/photos/hey-doll-baby/9.png";
import page10 from "../assets/photos/hey-doll-baby/10.png";
import page11 from "../assets/photos/hey-doll-baby/11.png";
import page12 from "../assets/photos/hey-doll-baby/12.png";
import page13 from "../assets/photos/hey-doll-baby/13.png";
import page14 from "../assets/photos/hey-doll-baby/14.png";
import page15 from "../assets/photos/hey-doll-baby/15.png";
import page16 from "../assets/photos/hey-doll-baby/16.png";
import page17 from "../assets/photos/hey-doll-baby/17.png";
import page18 from "../assets/photos/hey-doll-baby/18.png";
import page19 from "../assets/photos/hey-doll-baby/19.png";
import page20 from "../assets/photos/hey-doll-baby/20.png";
import page21 from "../assets/photos/hey-doll-baby/21.png";

import PreferencesHeader from "./PreferencesHeader";

export default function DollBaby() {
  return (
    <div className="container-fluid wholeContainer">
      <PreferencesHeader />

      <h1 className="col-12 bookTitle">Hey Doll Baby</h1>

      <div className="row d-flex justify-content-center">
        <div className="col-12 d-flex justify-content-center">
          <img alt="" className="pageStyle" src={page1}></img>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page2}></img>
            <img alt="" className="pageStyle" src={page3}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page4}></img>
            <img alt="" className="pageStyle" src={page5}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page6}></img>
            <img alt="" className="pageStyle" src={page7}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page8}></img>
            <img alt="" className="pageStyle" src={page9}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page10}></img>
            <img alt="" className="pageStyle" src={page11}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page12}></img>
            <img alt="" className="pageStyle" src={page13}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page14}></img>
            <img alt="" className="pageStyle" src={page15}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page16}></img>
            <img alt="" className="pageStyle" src={page17}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page18}></img>
            <img alt="" className="pageStyle" src={page19}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page20}></img>
            <img alt="" className="pageStyle" src={page21}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
