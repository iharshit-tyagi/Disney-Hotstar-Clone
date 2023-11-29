import MovieCard from "./MovieCard";

const MoviesCategory = ({ heading }) => {
  return (
    <div>
      <h4 className="text-xl font-bold ">{heading}</h4>
      <div className="flex">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};
export default MoviesCategory;
