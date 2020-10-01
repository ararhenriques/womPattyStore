import ItemPic from '../assets/beefpic.png';
import { ADD_TO_CART } from '../actions/actionTypes';
import {REMOVE_FROM_CART } from '../actions/actionTypes';
import { ADD_QUANTITY } from '../actions/actionTypes';
import { SUB_QUANTITY } from '../actions/actionTypes';
import { EMPTY_CART } from '../actions/actionTypes';
import { ADD_SHIPPING } from '../actions/actionTypes';


const initialState = {
    products: [{
        "id": 1,
        "name": "Beef Patty",
        "image": ItemPic,
        "price": 12,
        "quantity": 0,
        "selected": false
    },
    {
        "id": 2,
        "name": "Chicken Patty",
        "image": ItemPic,
        "price": 12,
        "quantity": 0,
        "selected": false
    },
    {
        "id": 3,
        "name": "Chicken & Cheese Patty",
        "image": ItemPic,
        "price": 14,
        "quantity": 0,
        "selected": false
    }
],
    addedItems: [],
    total: 0,
    searchNodes: ""
  };
  const allReducer = (state = initialState, action) => {
      if(action.type === ADD_TO_CART){
        let addedItem = state.products.find(product => product.id === action.id);
        let existingItem = state.addedItems.find(product => action.id === product.id);
        console.log(addedItem);
        console.log(action.id);
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
          let newItems = [...state.products]
          return{
              ...state,
              total: newTotal,
              addedItems: newItems
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
              total: newTotal,
               quantity: addedSItem.quantity
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

      if(action.type=== ADD_SHIPPING){
        return{
            ...state,
            total: state.total + 4
        }
      }

      if(action.type=== 'SUB_SHIPPING'){
          return{
              ...state,
              total: state.total - 4
          }
      }

      else {
        return state;
    }
  };

  export default allReducer;