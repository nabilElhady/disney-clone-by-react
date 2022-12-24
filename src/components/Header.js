import React, { useEffect, useState } from "react";
import logo1 from "../images/disney+.png";
import { Button } from "@mui/material";
import classes from "../style/Login.module.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import MovieIcon from "@mui/icons-material/Movie";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { useDispatch, useSelector } from "react-redux";
import { disneyAction } from "../store";
import Avatar from "@mui/material/Avatar";
import { UserAuth } from "../context/AuthContext";
import { async } from "@firebase/util";
import { useHistory } from "react-router-dom";

export const Header = () => {
  const history = useHistory();
  const { user, logoutt } = UserAuth();
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await handleGoogleSignIn().then(() => {
        console.log("asdasd");
      });
    } catch (err) {
      console.log(err);
    }
  };
  const dispatch = useDispatch();
  const items = useSelector((item) => item.disney);
  const login = () => {
    googleSignIn();
    handleGoogleSignIn();
    console.log(items);
  };
  useEffect(() => {
    if (user != null) {
      history.push("/home");
    } else {
      history.push("/");
    }
  }, [user]);
  const logout = async () => {
    try {
      await logoutt();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className={classes.header}>
        <img
          onClick={() => {
            console.log(user);
          }}
          src={logo1}
          className={classes.disneylogo}
        ></img>
        {user?.displayName ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <HomeIcon></HomeIcon>
              <p
                onClick={() => {
                  console.log(items);
                }}
                className={classes.sidetext}
                style={{ marginLeft: "1rem" }}
              >
                home{" "}
              </p>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <SearchIcon></SearchIcon>
              <p className={classes.sidetext} style={{ marginLeft: "1rem" }}>
                search{" "}
              </p>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <AddIcon></AddIcon>
              <p className={classes.sidetext} style={{ marginLeft: "1rem" }}>
                watch list{" "}
              </p>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <StarIcon></StarIcon>
              <p className={classes.sidetext} style={{ marginLeft: "1rem" }}>
                originals{" "}
              </p>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <MovieIcon></MovieIcon>
              <p className={classes.sidetext} style={{ marginLeft: "1rem" }}>
                movies{" "}
              </p>
            </div>{" "}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <LiveTvIcon></LiveTvIcon>
              <p className={classes.sidetext} style={{ marginLeft: "1rem" }}>
                series{" "}
              </p>
            </div>{" "}
          </div>
        ) : (
          ""
        )}
        <div>
          {!user?.displayName ? (
            <Button onClick={login} className={classes.loginbutton}>
              login
            </Button>
          ) : (
            ""
          )}
          {user?.displayName ? (
            <div style={{ width: "60px", height: "60px" }}>
              <Avatar
                src={user.photoURL}
                alt={items.name}
                className={classes.profilepic}
                sx={{ width: 56, height: 56 }}
              />
              <Button
                onClick={logout}
                className={classes.logoutbtn}
                variant="contained"
              >
                sign out
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
