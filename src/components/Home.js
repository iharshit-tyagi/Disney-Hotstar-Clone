import ImageSlider from "./ImageSlider";
import Channels from "./Channels";
import MoviesContainer from "./MoviesContainer";
const Home = () => {
  return (
    <div className=" bg-[#090b13] text-white p-2 bg-[url('./src/utils/images/home-background.png')] bg-no-repeat bg-cover bg-center">
      <ImageSlider />
      <Channels />
      <MoviesContainer />
    </div>
  );
};
export default Home;
