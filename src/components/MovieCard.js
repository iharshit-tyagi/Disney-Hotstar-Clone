import { Link } from "react-router-dom";
const MovieCard = ({ src, info }) => {
  return (
    <div className="relative">
      <Link to={"/watch/" + info.title}>
        <img
          className="object-cover rounded-md overflow-hidden hover:border-2 border-gray-50 transition-transform"
          src={src}
        />
        <p className="text-xl font-semibold">{info.title}</p>
      </Link>
    </div>
  );
};
export default MovieCard;
