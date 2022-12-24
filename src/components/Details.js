import React from "react";
import { useSelector } from "react-redux";
import "../style/Detail.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
export const Details = () => {
  const url = useSelector((item) => item.disney.link);
  const icon = useSelector((item) => item.disney.icon);
  const talk = useSelector((item) => item.disney.talk);

  return (
    <div>
      <div
        className="main"
        onClick={console.log(icon)}
        style={{
          backgroundImage: `url(${url})`,
        }}
      ></div>
      <div>
        <img
          height="180px"
          style={{
            zIndex: "55",
            position: "absolute",
            top: "6%",
            marginLeft: "8rem",
            transform: "skew(20deg)",
          }}
          src={icon}
        ></img>
      </div>
      <div className="buttons">
        <div className="firstb">
          <div className="play button button1">
            <PlayArrowIcon></PlayArrowIcon> play
          </div>
          <div className="trailer button">
            <PlayArrowIcon></PlayArrowIcon>trailer
          </div>
        </div>
        <div className="secondb">
          <div className="add">
            <AddIcon></AddIcon>
          </div>
        </div>
      </div>
      <div
        className="talk2"
        style={{
          fontFamily: "Lato, sans-serif",
          fontFamily: "Reenie Beanie, cursive",
        }}
      >
        {talk}
      </div>
    </div>
  );
};
