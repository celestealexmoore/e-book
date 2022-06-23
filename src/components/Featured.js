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
            <h1 className="featuredTitle">Coming Soon</h1>
            <div className="lineBreak"></div>
            <p className="description">
              So you've been following me on Instagram for like 5 years now and
              you're all, "How's that book coming along, Brian?" Well, it's
              finally here. And it's worth the wait! You're able to access all
              my time-consuming content for the free...and I'm so happy to share
              these gifts with you!
              <br />
              <br />
              Two Moore Books is my attempt to capture and preserve moments of
              my life most dear to me. Here, you'll find a ton of both pastry and dinner recipes: some
              super southern, some vegan, gluten-free, even some for lactating
              mamas! You'll also find an array of children's books with topics
              ranging from bedtime and potty-time routines to handling deep
              grief.
              <br/>
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
