import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Control from "./pages/Control";
import Projection from "./pages/Projection";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/controle" component={Control} />
        <Route path="/projetor" component={Projection} />
      </Switch>
    </BrowserRouter>
  );
}
