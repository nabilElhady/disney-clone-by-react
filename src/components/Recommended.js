import React from "react";
import "../style/Recommended.css";
import kids1 from "../images/kids1.jpg";
import kids2 from "../images/kids2.jpg";
import kids3 from "../images/kids3.jpg";
import kids4 from "../images/kids4.jpg";
import kids5 from "../images/kids5.jpg";
import kids6 from "../images/kids6.jpg";
import kids7 from "../images/kids7.jpg";
import kids8 from "../images/kids8.jpg";
import kids9 from "../images/kids9.jpg";
import kids10 from "../images/kids10.jpg";
import kids11 from "../images/kids11.jpg";
import kids12 from "../images/kids12.jpg";
import kids13 from "../images/kids13.jpg";
import kids14 from "../images/kids14.png";
import kids15 from "../images/kids15.jpg";
import kids16 from "../images/kids16.jpg";
import wallpaper1 from "../images/wallpaper1.jpg";
import wallpaper2 from "../images/wallpaper2.jpg";
import wallpaper3 from "../images/wallpaper3.jpg";
import wallpaper4 from "../images/wallpaper4.jpg";
import wallpaper5 from "../images/wallpaper2.jpg";
import wallpaper6 from "../images/wallpaper6.jpg";
import wallpaper7 from "../images/wallpaper7.jpg";
import wallpaper8 from "../images/wallpaper8.jpg";
import wallpaper9 from "../images/wallpaper9.jpg";
import wallpaper10 from "../images/wallpaper10.jpg";
import wallpaper11 from "../images/wallpaper11.jpg";
import wallpaper12 from "../images/wallpaper12.jpg";
import wallpaper13 from "../images/wallpaper10.jpg";
import wallpaper14 from "../images/wallpaper1.jpg";
import wallpaper15 from "../images/wallpaper15.jpg";
import wallpaper16 from "../images/wallpaper16.jpg";
import logo1 from "../images/toyStory.png";
import legoLogo from "../images/legoLogo.png";
import rioLogo from "../images/rioLogo.png";
import turboLogo from "../images/turboLogo.png";
import minionsLogo from "../images/minionsLogo.png";
import frozenLogo from "../images/frozenLogo.png";
import pandaLogo from "../images/pandaLogo.png";
import crodsLogo from "../images/croodsLogo.png";
import monsterIncLogo from "../images/monsterIncLogo.png";
import insideOutLogo from "../images/insideOutLogo.png";
import bossBabyLogo from "../images/bossBabyLogo.png";
import hotelLogo from "../images/hotelLogo.png";
import zootopiaLogo from "../images/zootopiaLogo.png";
import { useDispatch } from "react-redux";
import { disneyAction } from "../store";
import { useHistory } from "react-router-dom";
export const Recommended = () => {
  const talk = [
    "A little boy named Andy loves to be in his room, playing with his toys, especially his doll named Woody. But, what do the toys do when Andy is not with them, they come to life. Woody believes that his life (as a toy) is good. However, he must worry about Andy's family moving, and what Woody does not know is about Andy's birthday party. Woody does not realize that Andy's mother gave him an action figure known as Buzz Lightyear, who does not believe that he is a toy, and quickly becomes Andy's new favorite toy. Woody, who is now consumed with jealousy, tries to get rid of Buzz. Then, both Woody and Buzz are now lost. They must find a way to get back to Andy before he moves without them, but they will have to pass through a ruthless toy killer, Sid Phillips.",

    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  ];
  const history = useHistory();
  const dispatch = useDispatch();
  const click1 = (kids, kids2, talk) => {
    dispatch(disneyAction.addlink(kids));
    dispatch(disneyAction.addicon(kids2));
    dispatch(disneyAction.talk(talk));
    history.push("/details");
  };
  return (
    <div>
      <div style={{ position: "relative", top: "-40px", marginTop: "20px" }}>
        <h4>Recommended for you</h4>
        <div className="recomendation cont">
          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper1, legoLogo, talk[1])}
              src={kids1}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>
          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper2, rioLogo, talk[2])}
              src={kids2}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>

          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper3, turboLogo, talk[3])}
              src={kids3}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>

          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper4, minionsLogo, talk[3])}
              src={kids4}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", top: "-40px", marginTop: "20px" }}>
        <h4>Trending</h4>
        <div className="recomendation cont">
          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper5, rioLogo, talk[2])}
              src={kids5}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>
          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper6, frozenLogo, talk[2])}
              src={kids6}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>

          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper7, pandaLogo, talk[2])}
              src={kids7}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>

          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper8, crodsLogo, talk[2])}
              src={kids8}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", top: "-40px", marginTop: "20px" }}>
        <h4>original</h4>
        <div className="recomendation cont">
          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper9, insideOutLogo, talk[2])}
              src={kids9}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>
          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper10, monsterIncLogo, talk[2])}
              src={kids10}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>

          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper11, bossBabyLogo, talk[2])}
              src={kids11}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>

          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper12, logo1, talk[0])}
              src={kids12}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>
        </div>
      </div>
      <div style={{ position: "relative", top: "-40px", marginTop: "20px" }}>
        <h4>Recommended for you</h4>
        <div className="recomendation cont">
          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper13, monsterIncLogo, talk[2])}
              src={kids13}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>
          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper14, legoLogo, talk[2])}
              src={kids14}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>

          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper15, zootopiaLogo, talk[2])}
              src={kids15}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>

          <div className="cont2" style={{ zIndex: "2", position: "relative" }}>
            <img
              onClick={(e) => click1(wallpaper16, hotelLogo, talk[2])}
              src={kids16}
              className="img1 img2"
            ></img>
            <video muted autoPlay loop></video>
          </div>
        </div>
      </div>
    </div>
  );
};
