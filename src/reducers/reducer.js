import ItemPic from '../assets/beefpic.png';
import { ADD_TO_CART } from '../actions/actionTypes';
import {REMOVE_FROM_CART } from '../actions/actionTypes';
import { ADD_QUANTITY } from '../actions/actionTypes';
import { SUB_QUANTITY } from '../actions/actionTypes';
import { EMPTY_CART } from '../actions/actionTypes';
import { TOGGLE_MENU } from '../actions/actionTypes';
import products from '../components/products';

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
    anchorEl: null,
    anchorReference: 'anchorEl',
    searchNodes: ""
  };
  const allReducer = (state = initialState, action) => {
    //switch (action.type) {
      if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(products => products.id === action.id);
        let existingItem = state.addedItems.find(products => action.id === products.id);
        if(existingItem)
         {
            addedItem.quantity += 1
             return{
                ...state,
                 total: state.total + addedItem.price
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
          };
      }
      if(action.type === REMOVE_FROM_CART){
        let itemToRemove= state.addedItems.find(products=> action.id === products.id)
        let new_items = state.addedItems.filter(products=> action.id !== products.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )

        return{
          ...state,
          addedItems: new_items,
          total: newTotal
      };


      }
      if(action.type === ADD_QUANTITY){
        let addedQItem = state.products.find(products=> products.id === action.id)
        addedQItem.quantity += 1
          let newTotal = state.total + addedQItem.price
          return{
              ...state,
              total: newTotal
          };
      }
      if(action.type === SUB_QUANTITY){
        let addedSItem = state.products.find(products=> products.id === action.id)
        if(addedSItem.quantity === 1){
          let new_items = state.addedItems.filter(products=>products.id !== action.id)
          let newTotal = state.total - addedSItem.price
          return{
              ...state,
              addedItems: new_items,
              total: newTotal
          }
      }
      else {
          addedSItem.quantity -= 1
          let newTotal = state.total - addedSItem.price
          return{
              ...state,
              total: newTotal
          };
        }
      }
      if(action.type === EMPTY_CART){
        return {
          ...state,
          products: state.products.map(products =>
            products.selected
              ? {...products, selected: false, quantity: 1}
              : products,
          ),
        };
      }
      if(action.type === TOGGLE_MENU){
        let anchor = state.anchorEl
        let anchorToggle = !anchor
        return {
          ...state,
            anchorEl: anchorToggle
        }
      }
        return state;
  };

  export default allReducer;