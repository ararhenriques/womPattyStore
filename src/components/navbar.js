import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {removeFromCart, subQuantity, addQuantity} from '../actions/actions';

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

 const Navbar = (state) =>{
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRemove = (id) =>{
      state.removeFromCart(id)
  };

  const handleSubQuantity = (id) =>{
    state.subQuantity(id)
    };

   const handleAddQuantity = (id) =>{
    state.addQuantity(id)
    };

  let addedItems = state.products.length ?
  (  
      state.products.map(products=>{
          return(
             
              <li className="collection-item avatar" key={products.id}>
                      
                          <div className="item-desc">
                              <span className="title">{products.name}</span>
                              <p><b>Price: {products.price}$</b></p> 
                              <p>
                                  <b>Quantity: {products.quantity}</b> 
                              </p>
                              <div className="add-remove">
                                <IconButton >
                                    <ArrowDropUpIcon onClick={()=>{this.handleAddQuantity(products.id)}} />
                                </IconButton>
                                <IconButton onClick={()=>{this.handleSubtractQuantity(products.id)}}>
                                    <ArrowDropDownIcon />
                                </IconButton>
                              </div>
                                <IconButton onClick={()=>{this.handleRemove(products.id)}}>
                                    <HighlightOffIcon />
                                </IconButton>
                          </div>
                          
                     </li>                        
          )
      })
  ):

   (
      <p>Nothing.</p>
   )
// return(
//   <div className="container">
//       <div className="cart">
//           <h5>You have ordered:</h5>
//           <ul className="collection">
//               {addedItems}
//           </ul>
//       </div>  
//   </div>
// )

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
        <div>
            <div>
                <h5>You have ordered:</h5>
                <ul>
                    {addedItems}
                </ul>
            </div>
        </div>
      </Menu>
      
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeFromCart: (id)=>{dispatch(removeFromCart(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subQuantity: (id)=>{dispatch(subQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);