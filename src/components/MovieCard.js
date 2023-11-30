import { Link } from "react-router-dom";
const MovieCard = ({ src }) => {
  return (
    <>
      <Link to={"/watch/" + 1}>
        <img
          className="object-cover rounded-md overflow-hidden hover:border-2 border-gray-50 transition-transform"
          src={src}
        />
      </Link>
    </>
  );
};
export default MovieCard;
