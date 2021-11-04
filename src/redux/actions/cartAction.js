import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/Constants";

export const addToCart = (id, name, price, img, quantity) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            name,
            price,
            img,
            quantity,
        },
    };
};

export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
};
