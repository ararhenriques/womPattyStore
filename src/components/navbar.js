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
import logo from '../assets/wompattyLogo.png'

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    navLink: {
      textDecoration: 'none',
      margin: '5px',
      color: '#122F54'
    },
    navBar: {
      backgroundColor: '#DD00AE'
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: '#122F54'
    },
    navImg: {
      height: "7%",
      width: "7%"
    }
  });

 class Navbar extends Component{
   state = {
     anchorEl: null
   };

  render(){

    const { classes } = this.props;

    return(

    <div className={classes.root}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
        <img 
        src={logo}
        className={classes.navImg}/>
          <Typography variant="h6" className={classes.title}>
            WOM! Patties
          </Typography>
          <Typography variant="h6" ><Link to="/" className={classes.navLink}> Home </Link></Typography><br />
          <Typography variant="h6" ><Link to="/products" className={classes.navLink}> Products </Link></Typography><br />
          <Typography variant="h6" ><Link to="/cart" className={classes.navLink}> Cart </Link></Typography><br />
          <Typography variant="h6" ><Link to="/contact" className={classes.navLink}> Contact </Link></Typography><br />
        </Toolbar>
      </AppBar>

    </div>
    )
  }
}

export default (withStyles(styles)(Navbar));