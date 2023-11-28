import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderBadag from "../utils/images/slider-badag.jpg";
import sliderBadaging from "../utils/images/slider-badging.jpg";
import sliderScale from "../utils/images/slider-scale.jpg";
import sliderScales from "../utils/images/slider-scales.jpg";
const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoPlay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="mx-5 my-3  ">
      <Slider className="w-full overflow-visible " {...settings}>
        <div className="box-border ">
          <img
            className="shadow-sm h-full shadow-gray-50 rounded-md  hover:border border-spacing-3 cursor-pointer"
            src={sliderBadag}
          />
        </div>
        <div>
          <img
            className="shadow-sm shadow-gray-300 rounded-md  hover:border cursor-pointer"
            src={sliderBadaging}
          />
        </div>
        <div>
          <img
            className="shadow-sm shadow-gray-50 rounded-md  hover:border cursor-pointer"
            src={sliderScale}
          />
        </div>
        <div>
          <img
            className="shadow-sm shadow-gray-50 rounded-md  hover:border cursor-pointer"
            src={sliderScales}
          />
        </div>
      </Slider>
    </div>
  );
};
export default ImageSlider;
