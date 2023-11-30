import possibilityImage from "../../assets/possibility.png";
import "./possibility.css";

function Possibility() {
  return (
    <div className="parent-main">
      <div className="possibility-main">
        <div className="possibility-prt1">
          <img id="img" src={possibilityImage} alt="possibility" />
        </div>
        <div className="possibility-prt2">
          <p id="p1">Request Early Access To Get Started</p>
          <h1 id="p2">
            The possibilities are <br></br> your imaginations
          </h1>
          <p id="p3">
            Yet bed any for travelling assistance indulgence unpleasing. Not{" "}
            <br></br>
            thoughts all exercise blessing. Indulgence way everything joy{" "}
            <br></br>
            alteration boisterous the attachment. Party we years to order allow{" "}
            <br></br>
            asked of.
          </p>

          <p id="p4">Request Early Access To Get Started</p>
        </div>
      </div>
    </div>
  );
}

export default Possibility;
