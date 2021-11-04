import { OPEN_SIDE_BAR, CLOSE_SIDE_BAR } from "../constants/Constants";

export const sideBarReducer = (state = { sidebar: false }, action) => {
    switch (action.type) {
        case OPEN_SIDE_BAR:
            return { sidebar: true };
        case CLOSE_SIDE_BAR:
            return { sidebar: false };
        default:
            return state;
    }
};
