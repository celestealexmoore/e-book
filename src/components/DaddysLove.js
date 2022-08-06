import "../assets/css-styles/DaddysLove.css";
import page1 from "../assets/photos/im-daddys-love/1.png";
import page2 from "../assets/photos/im-daddys-love/2.png";
import page3 from "../assets/photos/im-daddys-love/3.png";
import page4 from "../assets/photos/im-daddys-love/4.png";
import page5 from "../assets/photos/im-daddys-love/5.png";
import page6 from "../assets/photos/im-daddys-love/6.png";
import page7 from "../assets/photos/im-daddys-love/7.png";
import page8 from "../assets/photos/im-daddys-love/8.png";
import page9 from "../assets/photos/im-daddys-love/9.png";
import page10 from "../assets/photos/im-daddys-love/10.png";
import page11 from "../assets/photos/im-daddys-love/11.png";
import page12 from "../assets/photos/im-daddys-love/12.png";
import page13 from "../assets/photos/im-daddys-love/13.png";
import page14 from "../assets/photos/im-daddys-love/14.png";
import page15 from "../assets/photos/im-daddys-love/15.png";
import page16 from "../assets/photos/im-daddys-love/16.png";
import page17 from "../assets/photos/im-daddys-love/17.png";
import page18 from "../assets/photos/im-daddys-love/18.png";
import page19 from "../assets/photos/im-daddys-love/19.png";
import page20 from "../assets/photos/im-daddys-love/20.png";
import page21 from "../assets/photos/im-daddys-love/21.png";
import page22 from "../assets/photos/im-daddys-love/22.png";
import PreferencesHeader from "./PreferencesHeader";

export default function DaddysLove() {
  return (
    <div className="container-fluid wholeContainer">
      <PreferencesHeader />

      <h1 className="col-12 bookTitle">I'm Daddy's Love</h1>

      <div className="row ">
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
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page22}></img>
          </div>
        </div>
      </div>
    </div>
  );
}
