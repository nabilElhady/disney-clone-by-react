import React from "react";
import "../../style/Viewrs.css";
import view1 from "../../images/viewers-starwars.png";
import view2 from "../../images/viewers-pixar.png";
import view3 from "../../images/viewers-national.png";
import view4 from "../../images/viewers-marvel.png";
import view5 from "../../images/viewers-disney.png";
import vid1 from "../../video/1564674844-disney.mp4";
import vid2 from "../../video/1564676115-marvel.mp4";
import vid3 from "../../video/1564676296-national-geographic.mp4";
import vid4 from "../../video/1564676714-pixar.mp4";
import vid5 from "../../video/1608229455-star-wars.mp4";
export const Viewrs = () => {
  return (
    <div className="cont" style={{ margin: "100px 0 0 20px " }}>
      <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
        <img src={view1} className="img1"></img>
        <video muted autoPlay loop>
          <source src={vid1} type="video/mp4" />
        </video>
      </div>
      <div>
        <img src={view2} className="img1"></img>
        <video muted autoPlay loop>
          <source src={vid4} type="video/mp4" />
        </video>
      </div>
      <div>
        <img src={view3} className="img1"></img>
        <video muted autoPlay loop>
          <source src={vid3} type="video/mp4" />
        </video>
      </div>
      <div>
        <img src={view4} className="img1"></img>
        <video muted autoPlay loop>
          <source src={vid2} type="video/mp4" />
        </video>
      </div>
      <div>
        <img src={view5} className="img1"></img>
        <video muted autoPlay loop>
          <source src={vid5} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
