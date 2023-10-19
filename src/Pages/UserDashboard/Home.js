import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import MensFashionContent from "./MensFashionContent";
import WomensFashionContent from "./WomensFashionContent";

const Home = () => {


  return (
    <>
      <div className="header-main-container">
        <Header />
      </div>
      <div className="slider-container">
        <Slider />
      </div>
      <div>
        <MensFashionContent></MensFashionContent>
      </div>
      <div>
        <WomensFashionContent></WomensFashionContent>
      </div>
      <div>
        <Footer />
      </div>

    </>
  );
};

export default Home;
