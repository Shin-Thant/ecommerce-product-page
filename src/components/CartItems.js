import { Image } from "@chakra-ui/image";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import deleteIcon from "../img/icon-delete.svg";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartAction";

export const CartItems = ({ id, name, img, price, quantity }) => {
    const dispatch = useDispatch();

    const deleteItem = () => {
        console.log(`item - ${id}`);
        dispatch(removeFromCart(id));
        console.log(`remove-item - ${id}`);
    };

    return (
        <Flex align="center" justify="space-between" mb="10px">
            <Image src={img} alt="" width="40px" borderRadius="md" />
            <Box fontSize="13px" fontWeight="500">
                <Text color="gray">{name}</Text>
                <Text color="gray">
                    ${price} x {quantity} - {""}
                    <Text as="span" fontSize="14px" fontWeight="bold">
                        ${(price * quantity).toFixed(2)}
                    </Text>
                </Text>
            </Box>
            <Image
                src={deleteIcon}
                alt=""
                cursor="pointer"
                onClick={deleteItem}
            />
        </Flex>
    );
};
