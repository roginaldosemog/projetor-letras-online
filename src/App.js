import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Control from "./pages/Control";
import ScreenProjection from "./pages/ScreenProjection";
import StreamProjection from "./pages/StreamProjection";

export default function App() {
  useEffect(() => {
    function handleResize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/controle" component={Control} />
        <Route path="/projetor" component={ScreenProjection} />
        <Route path="/projetor-live" component={StreamProjection} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
