import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css-styles/CarouselCards.css";
import chilaquiles from "../assets/photos/carousel-cards/foodPics/chilaquiles.png";
import brookies from "../assets/photos/carousel-cards/foodPics/brookies.png";
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
          slidesToSlide: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
      };

    return (
        <div className="items-center">
            <Carousel responsive={responsive} >
                <a href="./BakeHome"><img className="max-h-96 featuredPhotos" src={chilaquiles} alt="Chilaquiles"/></a>
                <a href="./BakeHome"><img className="max-h-96 featuredPhotos" src={brookies} alt="Chewy Brookies"/></a>
                <a href="./BakeHome"><img className="max-h-96 featuredPhotos" src={fritters} alt="Fried Peach Fritters"/></a>
                <a href="./BakeHome"><img className="max-h-96 featuredPhotos" src={snickersRolls} alt="Snickers Rolls"/></a>
                <a href="./BakeHome"><img className="max-h-96 featuredPhotos" src={baconChicken} alt="Bacon-Wrapped Chicken"/></a>
                <a href="./BakeHome"><img className="max-h-96 featuredPhotos" src={crullers} alt="Gluten-Free French Crullers"/></a>
                <a href="./BakeHome"><img className="max-h-96 featuredPhotos" src={cinnamonRolls} alt="Vegan Cinnamon Rolls"/></a>
            </Carousel>
        </div>
)}