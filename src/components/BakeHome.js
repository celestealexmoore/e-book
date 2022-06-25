import "../assets/modules/BakeHome.css";
import page1 from "../assets/photos/baking-at-home/1.png";
import page2 from "../assets/photos/baking-at-home/2.png";
import page3 from "../assets/photos/baking-at-home/3.png";
import page4 from "../assets/photos/baking-at-home/4.png";
import page5 from "../assets/photos/baking-at-home/5.png";
import page6 from "../assets/photos/baking-at-home/6.png";
import page7 from "../assets/photos/baking-at-home/7.png";
import page8 from "../assets/photos/baking-at-home/8.png";
import page9 from "../assets/photos/baking-at-home/9.png";
import page10 from "../assets/photos/baking-at-home/10.png";

const BakeHome = () => {
  return (
    <div className="container-fluid wholeContainer">
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
            <img alt="" className="pageStyle" src={page7}></img>
            <img alt="" className="pageStyle" src={page8}></img>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <img alt="" className="pageStyle" src={page9}></img>
            <img alt="" className="pageStyle" src={page10}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakeHome;
