import React from "react";
import classes from "../style/Login.module.css";
import logo1 from "../images/disney+.png";
import logo2 from "../images/ESPN-Plus.png";
import logo3 from "../images/58480a75cef1014c0b5e491b.png";
import Button from "@mui/material/Button";
import { Header } from "./Header";
import video2 from "../video/HTMLVideo.mp4";
export const Login = () => {
  return (
    <div>
      <Header></Header>
      <div className={classes.container}>
        <div className={classes.imgholder}>
          {" "}
          <img src={logo1}></img>
          <img src={logo2}></img>
          <img src={logo3}></img>
        </div>
        <div>
          <Button className={classes.takebutton} variant="contained">
            get all three
          </Button>
        </div>
        <div className={classes.discrp}>
          {" "}
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </div>
      </div>
    </div>
  );
};
