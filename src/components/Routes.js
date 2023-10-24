import React from "react";
import { Route, Switch } from "react-router-dom";
import Properties from "./Properties";
import AddProperty from "./AddProperty";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Properties} />
      <Route path="/add-property" component={AddProperty} />
      {/* Add more routes as needed */}
    </Switch>
  );
};

export default Routes;
