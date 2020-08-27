<<<<<<< HEAD
import {  ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, EMPTY_CART, ADD_QUANTITY } from "./actionTypes";
=======
import { ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, EMPTY_CART, ADD_QUANTITY } from "./actionTypes";
>>>>>>> 087656b3888c220720f7010baf1add85edacb133

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        id
    };
};
export const removeFromCart = (id) => {
    return {
        type: REMOVE_FROM_CART,
        id
    };
};
export const subQuantity = (id) => {
    return {
        type: SUB_QUANTITY,
        id
    };
};
export const addQuantity = (id) => {
    return {
        type: ADD_QUANTITY,
        id
    };
};
export const emptyCart = (id) => {
    return {
        type: EMPTY_CART,
        id
    };
};