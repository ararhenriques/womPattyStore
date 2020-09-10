import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';
import Navbar from "./components/navbar";
import Products from "./components/products";
import Contact from "./components/contact";
import Home from "./components/home";
import Cart from "./components/cart";

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/products" component={Products}/>
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/contact" component={Contact}/>
            </Switch>
        </div>
      </Router>
  );
};
}

export default App;
