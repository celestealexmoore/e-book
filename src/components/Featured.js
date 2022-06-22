import "../assets/modules/Featured.css";
import bookTrio from "../assets/photos/books.png";

const Featured = () => {
  return (
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
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="readMore">READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
