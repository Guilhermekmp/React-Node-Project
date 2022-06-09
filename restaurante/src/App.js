import React from "react";
import "./App.css";
import axios from "axios";
import { Provider } from "react-redux";
import store from "./store/store";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./components/layout/Landing";
import Products from "./components/product/Products";
import Orders from "./components/order/Orders";

import PrivateRoute from "./components/common/PrivateRoute";

import env from "./environment";
import ProductsRegister from "./components/product/ProductsRegister";

axios.defaults.baseURL = env.API_URL;
console.log(`Running at ${env.NAME} with ${env.API_URL}`);

function App() {
  return (
    <Provider store={store}>
      <div style={{ backgroundColor: "#C30045", width: "100%", height: 60, paddingTop: 13 }}>
        <h2 style={{ color: "white", textAlign: "center", margin: 0 }} >Restaurante</h2>
      </div>
      <Router>
        <Route exact path="/" component={Landing} />
        <Switch>
          <PrivateRoute
            exact
            path="/dashboard"
            component={Products}
          ></PrivateRoute>
          <PrivateRoute exact path="/orders" component={Orders}></PrivateRoute>
          <PrivateRoute exact path="/products/register" component={ProductsRegister}></PrivateRoute>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
