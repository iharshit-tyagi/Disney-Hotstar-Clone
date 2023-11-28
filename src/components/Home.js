import ImageSlider from "./ImageSlider";
import Channels from "./Channels";
const Home = () => {
  return (
    <div className="h-[calc(100vh-3.5rem)] bg-[#090b13] text-white p-2 bg-[url('./src/utils/images/home-background.png')]">
      <ImageSlider />
      <Channels />
    </div>
  );
};
export default Home;
