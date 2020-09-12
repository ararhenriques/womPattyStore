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
import { withStyles } from '@material-ui/core/styles';
import bgImage from './assets/wpsHome.JPG';
import bgImage1 from './assets/wpsContact.JPG';
import bgImage2 from './assets/wpsProducts.JPG';


const styles = theme => ({
  "@global": {
    body: {
      height: '100vh',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${bgImage})`,
      backgroundAttachment: "fixed",
      
    }
  },
  root: {
    flexGrow: 1,
    display: 'block'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  app: {
    display: 'block'
  },
  
});

class App extends Component {

  
  render() {
//  <div style={{backgroundImage: `url(require(${bgImage1}))`}}></div>
    const { classes } = this.props;

    return(
      <Router>
        <div className="root">
          <div className="app">
            <Navbar />
            <Switch >
              <Route exact path="/" component={Home}/>
              <Route exact path="/products" component={Products}/>
              <Route exact path="/cart" component={Cart}/>
              <Route exact path="/contact" component={Contact}/>
            </Switch>
          </div>
        </div>
      </Router>
  );
};
}

export default (withStyles(styles)(App));
