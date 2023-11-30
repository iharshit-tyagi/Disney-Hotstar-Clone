import MovieCard from "./MovieCard";
import card6 from "../utils/images2/card 6.webp";
import card2 from "../utils/images2/card 2.webp";
import card3 from "../utils/images2/card 3.webp";
import card4 from "../utils/images2/card 4.webp";
import card5 from "../utils/images2/card 5.webp";
import poster1 from "../utils/images2/poster 1.webp";
import posterr1 from "../utils/images2/poster 1.png";
import poster2 from "../utils/images2/poster 2.webp";
import posterr2 from "../utils/images2/poster 1.png";
import posterr3 from "../utils/images2/poster 3.webp";
import posterr6 from "../utils/images2/poster 6.webp";
import poster6 from "../utils/images2/poster 6.png";
import poster14 from "../utils/images2/poster 14.webp";
import poster12 from "../utils/images2/poster 12.png";
import poster4 from "../utils/images2/poster 4.webp";
const MoviesContainer = () => {
  return (
    <div className="pt-5 pl-7">
      <div>
        <h4 className="text-xl font-bold mt-9  ">Latest Releases</h4>
        <div className=" mt-9 grid grid-cols-5 gap-3 pl-7">
          <MovieCard src={poster1} />
          <MovieCard src={posterr1} />
          <MovieCard src={poster2} />
          <MovieCard src={posterr3} />
          <MovieCard src={poster4} />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mt-9  ">Recommended For You</h4>
        <div className=" mt-9 grid grid-cols-5 gap-3 pl-7">
          <MovieCard src={poster6} />
          <MovieCard src={posterr6} />
          <MovieCard src={card3} />
          <MovieCard src={card4} />
          <MovieCard src={card5} />
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold mt-9  ">Hotstar Specials</h4>
        <div className=" mt-9 grid grid-cols-5 gap-3 pl-7">
          <MovieCard src={poster1} />
          <MovieCard src={poster12} />
          <MovieCard src={poster2} />
          <MovieCard src={poster14} />
          <MovieCard src={posterr2} />
        </div>
      </div>
    </div>
  );
};
export default MoviesContainer;
