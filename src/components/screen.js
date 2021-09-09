import "../css/screen.css";
import Images from "./Images";
import racer_img from "../../src/components/images/racer-icon.png";
import defender_img from "./images/defender-icon.png";
import platform_img from "./images/platform-icon.png";
import jpp_img from "./images/jpp-small-logo.png";
import ctf_img from "./images/ctf-small-logo.png";
import bb_img from "./images/bb-small-logo.png";

function Screen(props) {
  return (
    <div className="box-wrapper">
      <h2> Single Player </h2>
      <div className="row">
        <Images _img={platform_img} />
        <Images _img={racer_img} />
        <Images _img={defender_img} />
      </div>

      <h2> Multiplayer </h2>
      <div className="row">
        <Images _img={jpp_img} />
        <Images _img={ctf_img} />
        <Images _img={bb_img} />
      </div>
    </div>
  );
}

export default Screen;
