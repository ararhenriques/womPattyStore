import ItemPic from '../assets/beefpic.png';
import { ADD_TO_CART } from '../actions/actionTypes';
import {REMOVE_FROM_CART } from '../actions/actionTypes';
import { ADD_QUANTITY } from '../actions/actionTypes';
import { SUB_QUANTITY } from '../actions/actionTypes';
import { EMPTY_CART } from '../actions/actionTypes';

const initialState = {
    products: [{
        "id": 1,
        "name": "Beef Patty",
        "image": ItemPic,
        "price": 12,
        "quantity": 1,
        "selected": false
    },
    {
        "id": 2,
        "name": "Chicken Patty",
        "image": ItemPic,
        "price": 12,
        "quantity": 1,
        "selected": false
    },
    {
        "id": 3,
        "name": "Chicken and Cheese Patty",
        "image": ItemPic,
        "price": 14,
        "quantity": 1,
        "selected": false
    }
],
    addedItems: [],
    total: 0,
    // anchorEl: null,
    // anchorReference: 'anchorEl',
  };
  const allReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id ? {...product, selected: true} : product,
          ),
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {...product, selected: false, quantity: 1}
              : product,
          ),
        };
      case ADD_QUANTITY:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {...product, quantity: product.quantity + 1}
              : product,
          ),
        };
      case SUB_QUANTITY:
        return {
          ...state,
          products: state.products.map(product =>
            product.id === action.id
              ? {
                  ...product,
                  quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
                }
              : product,
          ),
        };
      case EMPTY_CART:
        return {
          ...state,
          products: state.products.map(product =>
            product.selected
              ? {...product, selected: false, quantity: 1}
              : product,
          ),
        };
      default:
        return state;
    }
    // return state;
  };

  export default allReducer;