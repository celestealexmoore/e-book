import "../assets/modules/Featured.css";
import bookTrio from "../assets/photos/books.png";
import leftDiv from "../assets/photos/leftDiv.png";
import rightDiv from "../assets/photos/rightDiv.png";

const Featured = () => {
  return (
    <div className="fullContainer">
      <div className="container-fluid featuredEl">
        <div className="row">
          <div className="col books">
            <img
              src={bookTrio}
              alt="A trio of featured books"
              className="bookTrio"
            ></img>
          </div>

          <div className="col featuredText">
            <h1 className="featuredTitle">This Month</h1>
            <div className="lineBreak"></div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="readMore">READ MORE</button>
          </div>
        </div>
      </div>

      <div className="container-fluid bottomFeature">
        <div className="row d-flex justify-content-around">
          <div className="col-5 leftFeature">
            <img src={leftDiv} alt="" className="imgLeft"></img>
            <button className="readMoreBtm">READ MORE</button>
          </div>

          <div className="col-5 rightFeature">
            <img src={rightDiv} alt="" className="imgRight"></img>
            <button className="readMoreBtm">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
