import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./components/App";
import Cart from "./components/Cart";
import Navbar from "./components/Navbar";
import Party from "./components/Party";

import { useState, useEffect } from "react";

const Routes = () => {
  const [HomeActive, SetHomeActive] = useState(true);
  const [CartActive, SetCartActive] = useState(false);
  const [totalItems, SetTotalItems] = useState(0);
  const [totalCheese, SetTotalCheese] = useState(0);
  const [totalMeat, SetTotalMeat] = useState(0);
  const [totalVeggie, SetTotalVeggie] = useState(0);

  useEffect(() => {
    // changes total pizzas

    SetTotalItems(totalCheese + totalMeat + totalVeggie);
  }, [totalCheese, totalMeat, totalVeggie]);

  return (
    <BrowserRouter>
      <Navbar
        HomeActive={HomeActive}
        SetHomeActive={SetHomeActive}
        CartActive={CartActive}
        SetCartActive={SetCartActive}
        totalItems={totalItems}
        SetTotalItems={SetTotalItems}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/home" />;
          }}
        />
        <Route
          path="/home"
          render={(props) => (
            <App
              totalItems={totalItems}
              SetTotalItems={SetTotalItems}
              totalCheese={totalCheese}
              SetTotalCheese={SetTotalCheese}
              totalMeat={totalMeat}
              SetTotalMeat={SetTotalMeat}
              totalVeggie={totalVeggie}
              SetTotalVeggie={SetTotalVeggie}
              {...props}
            />
          )}
        />
        <Route
          path="/cart"
          render={(props) => (
            <Cart
              totalItems={totalItems}
              SetTotalItems={SetTotalItems}
              totalCheese={totalCheese}
              SetTotalCheese={SetTotalCheese}
              totalMeat={totalMeat}
              SetTotalMeat={SetTotalMeat}
              totalVeggie={totalVeggie}
              SetTotalVeggie={SetTotalVeggie}
              {...props}
            />
          )}
        />
        <Route
          exact
          path="/party"
          render={(props) => (
            <Party
              totalItems={totalItems}
              SetTotalItems={SetTotalItems}
              totalCheese={totalCheese}
              SetTotalCheese={SetTotalCheese}
              totalMeat={totalMeat}
              SetTotalMeat={SetTotalMeat}
              totalVeggie={totalVeggie}
              SetTotalVeggie={SetTotalVeggie}
              {...props}
            />
          )}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
