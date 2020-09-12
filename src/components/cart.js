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

class Cart extends Component{

    componentDidMount(){
        document.body.style.backgroundImage = `url(require(${bgImage1}))`
    }
    
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
              
        let addedItems = this.props.products.length ?
        (  
            this.props.products.map(products=>{
                return(
                   
                    <li className="collection-item avatar" key={products.id}>
                                <div className="item-img"> 
                                        <img src={products.image} alt={products.image}/>
                                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Cart)