import React from "react";
import "../../style/Home.css";
import { Header } from "../Header";
import { Slider2 } from "../Slider";
import { Viewrs } from "./Viewrs";
import { Recommended } from "../Recommended";
export const Home = () => {
  return (
    <div className="big">
      <Header></Header>
      <div className="maincontainer">
        <Slider2></Slider2>
        <Viewrs></Viewrs>
        <Recommended></Recommended>
      </div>
    </div>
  );
};
