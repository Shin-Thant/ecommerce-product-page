import { combineReducers } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { sideBarReducer } from "./reducers/sideBarReducer";

export const rootReducer = combineReducers({
    cart: cartReducer,
    sidebar: sideBarReducer,
});
