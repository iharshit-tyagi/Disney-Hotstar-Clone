const Channel = ({ src }) => {
  return (
    <div className="shadow-inner shadow-white">
      <img
        className=" cursor-pointer w-full h-full object-cover rounded-md transition-all hover:border border-blue-50"
        src={src}
      ></img>
    </div>
  );
};
export default Channel;
