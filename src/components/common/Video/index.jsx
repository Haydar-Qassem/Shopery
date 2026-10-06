import { FaPlay } from "react-icons/fa";
import { PlayButton, VideoStyles } from "./styles";
import videothumb from "../../../assets/images/Video-thumb.png";

function Video() {
  return (
    <VideoStyles>
      <img src={videothumb} alt="Delivery man with groceries" />
      <PlayButton>
        <FaPlay />
      </PlayButton>
    </VideoStyles>
  );
}

export default Video;
