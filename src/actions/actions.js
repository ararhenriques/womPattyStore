import { ADD_TO_CART, REMOVE_FROM_CART, SUB_QUANTITY, EMPTY_CART, ADD_QUANTITY, TOGGLE_MENU } from "./actionTypes";

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
export const toggleMenu = (id) => {
    return {
        type: TOGGLE_MENU,
        id
    };
};