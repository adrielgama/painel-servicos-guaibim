import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./pages/Home/Home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/estoque" component={Estoque} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
