import MoviesCategory from "./MoviesCategory";
const MoviesContainer = () => {
  return (
    <div className="pt-5 pl-7">
      Movies Container
      <MoviesCategory heading={"Recommended For You"} />
      <MoviesCategory heading={"Marvel"} />
      <MoviesCategory heading={"Pixar"} />
    </div>
  );
};
export default MoviesContainer;
