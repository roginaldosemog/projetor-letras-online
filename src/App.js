import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Control from "./pages/Control";
import ScreenProjection from "./pages/ScreenProjection";
import StreamProjection from "./pages/StreamProjection";

export default function App() {
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
