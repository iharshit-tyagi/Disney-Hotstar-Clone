import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { moviesData } from "../utils/constants";
import playIcon from "../utils/images/play-icon-black.png";
const WatchPage = () => {
  //   useEffect(() => {
  //     getVideo();
  //   }, []);
  //   const getVideo = () => {
  //     console.log("Get Video Called");
  //   };
  const title = useParams();
  console.log(title);
  const titleInfo = moviesData.movies.filter((ele) => {
    return ele.title === title.title;
  });
  console.log(titleInfo[0]);
  return (
    <div
      style={{ "--image-url": `url(${titleInfo[0].backgroundImg})` }}
      className="  p-2 bg-[image:var(--image-url)] bg-no-repeat bg-cover bg-center min-h-[calc(100vh-3.5rem)] bg-fixed"
    >
      <div className="pl-7 mt-2">
        <img className="w-60" src={titleInfo[0].titleImg} />
        <h3 className="text-white font-2xl font-bold mt-2">
          {titleInfo[0].subTitle}
        </h3>
        <p className="text-white text-xl mt-2 w-2/5">
          {titleInfo[0].description}
        </p>
        <h4 className="text-white font-2xl font-bold mt-2">
          {titleInfo[0].genre}
        </h4>
        <button className="bg-white w-44 px-2 py-2 font-semibold space-x-1 flex text-lg items-center gap-2 mt-4 rounded-md hover:bg-gray-300">
          <div>
            <img src={playIcon} />
          </div>
          <div className=""> Watch Now</div>
        </button>
      </div>
    </div>
  );
};
export default WatchPage;
