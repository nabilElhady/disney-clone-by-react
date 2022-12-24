import React from "react";
import { Login } from "./components/Login";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Home } from "./components/home/Home";
import { AuthContextProvider } from "./context/AuthContext";
import { Details } from "./components/Details";
export const App = () => {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Switch>
          <div style={{ overflow: "hidden" }}>
            <Route path="/" exact component={Login}></Route>
            <Route path="/home" exact component={Home}></Route>
            <Route path="/details" exact component={Details}></Route>
          </div>
        </Switch>
      </BrowserRouter>
    </AuthContextProvider>
  );
};
