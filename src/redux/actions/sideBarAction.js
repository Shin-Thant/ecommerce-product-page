import { CLOSE_SIDE_BAR, OPEN_SIDE_BAR } from "../constants/Constants";

export const openSidebar = () => {
    return {
        type: OPEN_SIDE_BAR,
    };
};

export const closeSidebar = () => {
    return {
        type: CLOSE_SIDE_BAR,
    };
};
