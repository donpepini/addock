import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

//contexts
import PeriodicalContextProvider from "./contexts/promotionContexts/PeriodicalContext";
import PackageContextProvider from "./contexts/promotionContexts/PackageContext";

//components
import Sidenav from "./components/layout/Sidenav";
import Nav from "./components/layout/Nav";
import Navtabs from "./components/layout/Navtabs";
import EditPromotion from "./components/promotions/EditPromotion";
import CreatePromotion from "./components/promotions/CreatePromotion";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PackageContextProvider>
          <PeriodicalContextProvider>
            <Sidenav />
            <Nav />
            <Switch>
              <Route exact path="/" component={Navtabs} />
              <Route
                exact
                path="/promotion/:type/create"
                component={CreatePromotion}
              />
              <Route
                exact
                path="/promotion/:type/:id"
                component={EditPromotion}
              />
            </Switch>
          </PeriodicalContextProvider>
        </PackageContextProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
