import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import IconButton from '@material-ui/core/IconButton';
import { removeFromCart, addQuantity, subQuantity} from '../actions/actions';
import bgImage from '../assets/wpsHome.JPG';
import bgImage1 from '../assets/wpsContact.JPG';
import bgImage2 from '../assets/wpsProducts.JPG';
import { withStyles } from '@material-ui/core';

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

      cardImg: {
        maxHeight: 140,
        margin: 'auto'
    },

    card: {
      width: 345,
      minWidth: 300,
      minHeight: 300,
      backgroundColor: '#122F54',
      boxShadow: 3,
      padding: '1em',
      margin: 'auto',
      marginTop: "50px",
      marginBottom: "50px",
      display: 'flex',
      flexDirection: 'column',
      zIndex: 2
    },

    cardFill: {
      display: 'flex',
      flexDirection: 'column',
      verticalAlign: 'middle',
      textAlign: 'center',
      color: '#8BD6AE'
    },

    box: {
      display: 'flex',
      flexDirection: 'column',
    },

    buttonBox: {
        display: 'flex',
        flexDirection: 'row',
        verticalAlign: 'middle',
        justifyContent: 'space-evenly',
    },

    button: {
      position: 'relative',
      color: '#8BD6AE',
      backgroundColor: '#181C3F',
    }
});

class Cart extends Component{
    
    handleRemove = (id)=>{
        this.props.removeFromCart(id);
    };
    
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    };
    
    handleSubtractQuantity = (id)=>{
        this.props.subQuantity(id);
    };

    render(){

        const { classes } = this.props;
              
        let addedItems = this.props.products.length ?
        (  
            this.props.products.map(products=>{
                return(
                   
                    <li className={classes.card} key={products.id}>
                            <div className={classes.cardFill}>
                                <div className="item-img"> 
                                        <img 
                                        src={products.image} 
                                        alt={products.image} 
                                        className={classes.cardImg}/>
                                    </div>
                                    <span className="title">{products.name}</span>
                                    <p><b>Price: {products.price}$</b></p> 
                                    <p>
                                        <b>Quantity: {products.quantity}</b> 
                                    </p>
                                    <div className={classes.buttonBox}>
                                      <IconButton onClick={()=>{this.handleAddQuantity(products.id)}} className={classes.button}>
                                          <ArrowDropUpIcon/>
                                      </IconButton>
                                      <IconButton onClick={()=>{this.handleSubtractQuantity(products.id)}} className={classes.button}>
                                          <ArrowDropDownIcon/>
                                      </IconButton>
                                      <IconButton onClick={()=>{this.handleRemove(products.id)}} className={classes.button}>
                                          <HighlightOffIcon/>
                                      </IconButton>
                                    </div>
                                </div>
                                
                           </li>                        
                )
            })
        ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>      
            </div>
       )
    }
}
const mapStateToProps = (state)=>{
    return{
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
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Cart));