import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {removeFromCart, subQuantity, addQuantity} from '../actions/actions';
import { TableBody } from '@material-ui/core';
import bgImage from '../assets/wpsHome.JPG';
import bgImage1 from '../assets/wpsContact.JPG';
import bgImage2 from '../assets/wpsProducts.JPG';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    navBar: {
      backgroundColor: '#DD00AE'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  });

 class Navbar extends Component{
   state = {
     anchorEl: null
   };

   handleClick =(str) => {
     var bckgrndImage = document.body.style.backgroundImage
     if (str === "Home"){
       this.bckgrndImage = `url(require(${bgImage}))`
     } else if (str === "Contacts") {
       bckgrndImage = `url(require(${bgImage1}))`
     } else if (str === "Products") {
       bckgrndImage = `url(require(${bgImage2}))`
     } else {
       bckgrndImage = `url(require(${bgImage}))`
     };
     console.log(`${str} clicked`)
   };

  render(){
    const { classes } = this.props;

    return(

    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} onClick={this.handleClick("Home")}>
            WOM! Patties
          </Typography>
          <Typography variant="h6" onClick={this.handleClick("Home")}><Link to="/" > Home </Link></Typography>
          <Typography variant="h6" onClick={this.handleClick("Products")}><Link to="/products"> Products </Link></Typography>
          <Typography variant="h6" onClick={this.handleClick("Cart")}><Link to="/cart"> Cart </Link></Typography>
          <Typography variant="h6" onClick={this.handleClick("Contact")}><Link to="/contact"> Contact </Link></Typography>
        </Toolbar>
      </AppBar>

    </div>
    )
  }
}

export default (withStyles(styles)(Navbar));