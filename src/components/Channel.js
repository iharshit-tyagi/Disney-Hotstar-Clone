const Channel = ({ src }) => {
  return (
    <div>
      <img
        className=" cursor-pointer w-full h-full object-cover rounded-md border border-gray-50"
        src={src}
      ></img>
    </div>
  );
};
export default Channel;
