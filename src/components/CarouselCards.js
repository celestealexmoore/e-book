import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css-styles/CarouselCards.css";
import chilaquiles from "../assets/photos/carousel-cards/foodPics/chilaquiles.png";
import brookies from "../assets/photos/carousel-cards/foodPics/brookies.png";
import birriaPasta from "../assets/photos/carousel-cards/foodPics/birria-pasta.png";
import fritters from "../assets/photos/carousel-cards/foodPics/fritters.png";
import snickersRolls from "../assets/photos/carousel-cards/foodPics/snickersRolls.png";
import baconChicken from "../assets/photos/carousel-cards/foodPics/bacon-wrapped-chicken.png";
import crullers from "../assets/photos/carousel-cards/foodPics/crullers.png";
import cinnamonRolls from "../assets/photos/carousel-cards/foodPics/cinnamonRolls.png";

export default function CarouselCards() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className="items-center">
            <Carousel responsive={responsive} >
                <div><img className="max-h-96 featuredPhotos" src={chilaquiles} alt="Chilaquiles"/></div>
                <div><img className="max-h-96 featuredPhotos" src={brookies} alt="Chewy Brookies"/></div>
                <div><img className="max-h-96 featuredPhotos" src={birriaPasta} alt="Spicy Birria Pasta"/></div>
                <div><img className="max-h-96 featuredPhotos" src={fritters} alt="Fried Peach Fritters"/></div>
                <div><img className="max-h-96 featuredPhotos" src={snickersRolls} alt="Snickers Rolls"/></div>
                <div><img className="max-h-96 featuredPhotos" src={baconChicken} alt="Bacon-Wrapped Chicken"/></div>
                <div><img className="max-h-96 featuredPhotos" src={crullers} alt="Gluten-Free French Crullers"/></div>
                <div><img className="max-h-96 featuredPhotos" src={cinnamonRolls} alt="Vegan Cinnamon Rolls"/></div>
            </Carousel>
        </div>
)}