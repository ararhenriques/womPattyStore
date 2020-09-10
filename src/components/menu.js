import React, { useEffect, useState, Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import IconButton from '@material-ui/core/IconButton';
import {removeFromCart, subQuantity, addQuantity, toggleMenu} from '../actions/actions';

class Menu extends Component{

  handleRemove = (id) =>{
    this.props.removeFromCart(id)
  };

  handleSubQuantity = (id) =>{
    this.props.subQuantity(id)
  };

  handleAddQuantity = (id) =>{
    this.props.addQuantity(id)
  };

  render(){

    const { anchorEl } = this.props.anchor ?? true

    let addedItems = this.props.products.length ?
  (
      this.props.products.map(products=>{
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
                                    <ArrowDropUpIcon onClick={() => {this.handleAddQuantity(products.id)}} />
                                </IconButton>
                                <IconButton onClick={() => {this.handleSubQuantity(products.id)}}>
                                    <ArrowDropDownIcon />
                                </IconButton>
                              </div>
                                <IconButton onClick={() => {this.handleRemove(products.id)}}>
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
      <Menu
        className= 'Menu'
        isHidden={anchorEl}
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
    )
  }
}

const mapStateToProps = (state) => {
    return {
        products: state.addedItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeFromCart: (id)=> {dispatch(removeFromCart(id))},
        addQuantity: (id)=> {dispatch(addQuantity(id))},
        subQuantity: (id)=> {dispatch(subQuantity(id))},
        toggleMenu: (event)=> {dispatch(toggleMenu(event))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)((Menu));