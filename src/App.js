import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { products } from "../src/data/items";
import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import DetailsPage from "./components/DetailsPage/DetailsPage";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  return (
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
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
