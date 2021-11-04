import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/Constants";

export const cartReducer = (state = { items: 0, itemInfo: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                items: state.items + 1,
                itemInfo: [...state.itemInfo, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                items: state.items - 1,
                itemInfo: state.itemInfo.filter((i) => i.id !== action.payload),
            };
        default:
            return state;
    }
};
