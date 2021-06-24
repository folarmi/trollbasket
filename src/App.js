import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { products } from "../src/data/items";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div className="">
            <Route path="/" exact component={LandingPage} />
            <Route
              exact
              path="/details/:id"
              render={({ match }) => (
                <DetailsPage
                  product={products.find((item) => item.id === match.params.id)}
                />
              )}
            />
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
