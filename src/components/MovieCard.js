const MovieCard = ({ src }) => {
  return (
    <>
      <img
        className="object-cover rounded-md overflow-hidden hover:border-2 border-gray-50 transition-transform"
        src={src}
      />
    </>
  );
};
export default MovieCard;
