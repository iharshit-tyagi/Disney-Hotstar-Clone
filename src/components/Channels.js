import Channel from "./Channel";
import disneyChannel from "../utils/images/viewers-disney.png";
import marvelChannel from "../utils/images/viewers-marvel.png";
import nationalChannel from "../utils/images/viewers-national.png";
import pixarChannel from "../utils/images/viewers-pixar.png";
import starWarsChannel from "../utils/images/viewers-starwars.png";

const Channels = () => {
  return (
    <div className=" mt-9 grid grid-cols-5 gap-3">
      <Channel src={disneyChannel} />
      <Channel src={marvelChannel} />
      <Channel src={nationalChannel} />
      <Channel src={pixarChannel} />
      <Channel src={starWarsChannel} />
    </div>
  );
};
export default Channels;
