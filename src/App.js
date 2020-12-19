import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/Home";
import Settings from "./views/Settings";
import Anime from "./views/Anime";
import Cartoon from "./views/Cartoon";
import Realism from "./views/Realism";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainCard from "./views/MainCard";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <br />
        <br />
        <Header />
        <Switch>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/anime">
            <Anime />
          </Route>
          <Route path="/cartoon">
            <Cartoon />
          </Route>
          <Route path="/realism">
            <Realism />
          </Route>
          <Route path="/maincard/:id">
            <MainCard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
