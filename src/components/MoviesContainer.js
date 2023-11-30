import MovieCard from "./MovieCard";
import { moviesData } from "../utils/constants";
const MoviesContainer = () => {
  const data = moviesData.movies;
  console.log(data);
  return (
    <div className="p-5">
      <div>
        <h4 className="text-xl font-bold mt-9 ">Latest Releases</h4>
        <div className=" mt-9 grid grid-cols-5 gap-3 pl-7">
          <MovieCard src={data[1].backgroundImg} info={data[1]} />
          <MovieCard src={data[2].backgroundImg} info={data[2]} />
          <MovieCard src={data[3].backgroundImg} info={data[3]} />
          <MovieCard src={data[4].backgroundImg} info={data[4]} />
          <MovieCard src={data[5].backgroundImg} info={data[5]} />
        </div>
      </div>
      <div>
        <h4 className="text-xl font-bold mt-9  ">Recommended For You</h4>
        <div className=" mt-9 grid grid-cols-5 gap-3 pl-7">
          <MovieCard src={data[6].backgroundImg} info={data[6]} />
          <MovieCard src={data[7].backgroundImg} info={data[7]} />
          <MovieCard src={data[8].backgroundImg} info={data[8]} />
          <MovieCard src={data[9].backgroundImg} info={data[9]} />
          <MovieCard src={data[10].backgroundImg} info={data[10]} />
        </div>
      </div>

      <div>
        <h4 className="text-xl font-bold mt-9  ">Hotstar Specials</h4>
        <div className=" mt-9 grid grid-cols-5 gap-3 pl-7">
          <MovieCard src={data[11].backgroundImg} info={data[11]} />
          <MovieCard src={data[12].backgroundImg} info={data[12]} />
          <MovieCard src={data[13].backgroundImg} info={data[13]} />
          <MovieCard src={data[14].backgroundImg} info={data[14]} />
          <MovieCard src={data[15].backgroundImg} info={data[15]} />
        </div>
      </div>
    </div>
  );
};
export default MoviesContainer;
