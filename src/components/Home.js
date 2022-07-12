import "../assets/css-styles/Home.css";
import bookTrio from "../assets/photos/home/books.png";
import weeklyRecipes from "../assets/photos/home/weeklyRecipes.png";
import chilaquiles from "../assets/photos/home/chilaquiles.png";
import brookies from "../assets/photos/home/brookies.png";
import birriaPasta from "../assets/photos/home/birria-pasta.png";
import fritters from "../assets/photos/home/fritters.png";
import doughnuts from "../assets/photos/home/doughnuts.png";

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
              So you've been following me on Instagram for like 5 years now and
              you're all, "How's that book coming along, Brian?" Well, it's
              finally here. And it's worth the wait! You're able to access all
              my time-consuming content for the free...and I'm so happy to share
              these gifts with you!
              <br />
              <br />
              Two Moore Books is my attempt to capture and preserve moments of
              my life most dear to me. Here, you'll find a ton of both pastry
              and dinner recipes: some super southern, some vegan, gluten-free,
              even some for lactating mamas! You'll also find an array of
              children's books with topics ranging from bedtime and potty-time
              routines to handling deep grief.
              <br />
            </p>
            <a href="./About">
              <button className="readMore">READ MORE</button>
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid featuredRecipesParent">
        <h1 className="featuredRecipesTitle">Most Requested Recipes</h1>
        <div className="row featuredRow">
          <div className="col featuredInd">
            <img
              src={chilaquiles}
              alt="Chilaquiles"
              className="featuredPhotos"
            ></img>
            <div className="featuredRecipeTitle">Chilaquiles</div>
          </div>

          <div className="col featuredInd">
            <img src={brookies} alt="Brookies" className="featuredPhotos"></img>
            <div className="featuredRecipeTitle">Chewy Brookies</div>
          </div>

          <div className="col featuredInd">
            <img
              src={birriaPasta}
              alt="Birria Pasta"
              className="featuredPhotos"
            ></img>
            <div className="featuredRecipeTitle">Spicy Birria Pasta</div>
          </div>

          <div className="col featuredInd">
            <img
              src={fritters}
              alt="Fried Peach Fritters"
              className="featuredPhotos"
            ></img>
            <div className="featuredRecipeTitle">Fried Peach Fritters</div>
          </div>
        </div>
      </div>

      <div className="container-fluid bottomFeature">
        <div className="row">
          <div className="col-6 d-flex justify-content-center leftFeature">
            <img src={weeklyRecipes} alt="" className="weeklyRecipes"></img>
          </div>

          <div className="col-6 rightFeature">
            <div className="subscribeTitle">Join our Clique</div>
            <p className="subscribeText">
              Subscribe now to get first dibs on weekly content and new book
              releases! Enter your email, and we'll send it right over!
            </p>

            <form>
              <div className="form-group">
                <input
                  type="name"
                  className="form-control shadow bg-white rounded"
                  id="firstName"
                  placeholder="First Name"
                ></input>
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control shadow bg-white rounded"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                ></input>
              </div>

              <button type="submit" className="submitEmail">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="toTopParent">
        <a href="/" className="backToTop">
          <i class="bi bi-arrow-up topArrow"></i>
        </a>
      </div>
    </div>
  );
};

export default Featured;
