import "../css/screen.css";
import Screen from "./screen";
import dash_min from "./images/dash-minus.png";

function Images(props) {
  return (
    <div>
      <div className="circle">
        <img src={props._img} alt="" className="img-1"></img>
      </div>
      <img src={dash_min} alt="" className="img-2"></img>
    </div>
  );
}

export default Images;
