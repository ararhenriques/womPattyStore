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

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/products" component={Products}/>
              <Route exact path="/contact" component={Contact}/>
            </Switch>
        </div>
      </Router>
  );
};
}

export default App;
