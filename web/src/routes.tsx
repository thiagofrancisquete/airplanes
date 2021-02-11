import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Avioes from "./pages/Avioes";
import Criar from "./pages/Criar";

const Routes = () => {
  return (
    <Switch>
      <Route exact component={Avioes} path="/aeronaves" />
      <Route exact component={Criar} path="/cadastrar" />
      <Route exact component={Home} path="/" />
    </Switch>
  );
};

export default Routes;
