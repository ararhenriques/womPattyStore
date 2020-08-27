import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Container from '@material-ui/core/Container';
import products from './products';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

  const Navbar = () => {
    

    let addedItems = this.props.products.length ? (
        this.props.products.map(products=>{
            
            return(
               
                <li className="collection-item avatar" key={products.id}>
                        
                            <div className="item-desc">
                                <span className="title">{products.name}</span>
                                <p><b>Price: ${products.price}</b></p> 
                                <p>
                                    <b>Quantity: {products.quantity}</b> 
                                </p>
                                <div className="add-remove">
                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                        <ArrowDropUpIcon/>
                                    </IconButton>
                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                        <ArrowDropDownIcon/>
                                    </IconButton>
                                </div>
                                    <IconButton edge="start" color="inherit" aria-label="menu">
                                        <HighlightOffIcon/>
                                    </IconButton>
                            </div>
                            
                       </li>                        
            )
        }
    )):
    (
        <p>Nothing.</p>
    )

    return(
            // <nav className="nav-wrapper">
            //     <div className="container">
            //         <Link to="/" className="brand-logo">LOGO HERE</Link>
                    
            //         <ul className="right">
            //             <li><Link to="/">Home</Link></li>
            //             <li><Link to="/products">Products</Link></li>
            //             <li><Link to="/contact">Contact</Link></li>
            //             {/* dropdown? */}
            //             <li><ShoppingCartIcon to=""><i className="material-icons">ShoppingCartIcon</i></ShoppingCartIcon></li>
            //         </ul>
            //     </div>
            // </nav>  
            <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            WOMPatties
          </Typography>
          <Typography variant="h6"><Link to="/" > Home </Link></Typography>
          <Typography variant="h6"><Link to="/products"> Products </Link></Typography>
          <Typography variant="h6"><Link to="/contact"> Contact </Link></Typography>
          <IconButton onClick={handleClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <ShoppingCartIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Container>
            <div class="cart">
                <h5>You have ordered:</h5>
                <ul>
                    {addedItems}
                </ul>
            </div>
        </Container>
      </Menu>

    </div>
    )
    

}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems
    }
}

export default connect(mapStateToProps)(Navbar);