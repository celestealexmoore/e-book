import bakeHome from "../assets/photos/books/baking-at-home.png";
import dollBaby from "../assets/photos/books/doll-baby.png";
import daddysLove from "../assets/photos/books/daddys-love.png";
import "../assets/css-styles/Books.css";

export default function Books() {
  return (
    <div className="booksParent">
      <a href="/Im-Daddys-Love" className="indBook align-left">
        <div className="bookImgParent">
          <img
            src={daddysLove}
            className=""
            alt="Book titled: I'm Daddy's Love"
          />
        </div>
        <div className="bookContent">
          <h2>I'm Daddy's Love</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </a>

      <a href="/BakeHome" className="indBook align-right">
        <div className="bookImgParent">
          <img src={bakeHome} className="" alt="Book titled: Baking at Home" />
        </div>
        <div className="bookContent">
          <h2>Baking at Home</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </a>

      <a href="/Hey-Doll-Baby" className="indBook align-left">
        <div className="bookImgParent">
          <img src={dollBaby} className="" alt="Book titled: Hey Doll Baby!" />
        </div>
        <div className="bookContent">
          <h2>Hey Doll Baby!</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </a>
    </div>
  );
}
