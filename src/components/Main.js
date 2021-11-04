import { Badge, Box, Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "@chakra-ui/button";

import { ImgDetailsGroup, ImgPreviewGroup } from "./ImgGroup";
import { addToCart } from "../redux/actions/cartAction";
import product1Thumb from "../img/image-product-1-thumbnail.jpg";
import { SideBar } from "./SideBar";

export const Main = () => {
    const dispatch = useDispatch();

    const [itemName, setItemName] = useState("Fall Limited Edition Sneakers");
    const [itemPrice, setItemPrice] = useState(125.0);

    const [focusing, setFocusing] = useState(false);
    const [cartItem, setCartItem] = useState(0);

    const addItem = () => {
        setCartItem(cartItem + 1);
    };

    const removeItem = () => {
        if (cartItem > 0) {
            setCartItem(cartItem - 1);
        }
    };

    const viewDetails = () => {
        setFocusing(true);
    };

    const exitDetails = () => {
        setFocusing(false);
    };

    const [id, setId] = useState(1);
    const clickHandler = () => {
        if (cartItem > 0) {
            dispatch(
                addToCart(id, itemName, itemPrice, product1Thumb, cartItem)
            );
            setId(id + 1);
        }
    };

    // const { sidebar } = useSelector((state) => state.sidebar);

    return (
        <>
            {/* {sidebar && <SideBar />} */}
            {focusing && <ImgDetailsGroup exitDetails={exitDetails} />}
            <Flex
                px={["5px", "10px", "35px"]}
                align="flex-start"
                direction={["column", "column", "row", "row"]}
            >
                <ImgPreviewGroup viewDetails={viewDetails} />

                <Flex
                    marginTop="3rem"
                    flex="1.3"
                    justify="center"
                    align="center"
                >
                    <Box width={["100%", "100%", "75%"]}>
                        <Text
                            fontSize="15px"
                            color="hsl(26, 100%, 55%)"
                            fontWeight="bold"
                        >
                            SNEAKER COMPANY
                        </Text>
                        <Text
                            fontSize={["1.5rem", "2rem", "2.5rem"]}
                            fontWeight="bold"
                            lineHeight="1.20em"
                        >
                            {itemName}
                        </Text>
                        <Text color="gray.500" fontSize="15.5px" mt="1.8rem">
                            These low-profile sneakers are you perfect casual
                            wear companion. Featuring a durable rubber outer
                            sole, they'll withstand everything the weather can
                            offer.
                        </Text>
                        <Flex mt="1rem" align="center">
                            <Text mr="15px" fontSize="28px" fontWeight="bold">
                                ${itemPrice}
                            </Text>
                            <Badge
                                fontSize="16px"
                                borderRadius="md"
                                colorScheme="orange"
                            >
                                50%
                            </Badge>
                        </Flex>
                        <Text
                            textDecoration="line-through"
                            color="gray.400"
                            fontWeight="bold"
                        >
                            $250.00
                        </Text>

                        <Flex mt="2rem" direction={["column", "row", "row"]}>
                            <Flex
                                bg="gray.100"
                                align="center"
                                mr={["0rem", "1rem", "1rem"]}
                                borderRadius="lg"
                                width={["100%", "130px"]}
                                justify="space-between"
                                height="50px"
                                px="5px"
                                mb={["1rem"]}
                            >
                                <Button
                                    color="hsl(26, 100%, 55%)"
                                    fontSize="20px"
                                    fontWeight="bold"
                                    onClick={removeItem}
                                >
                                    -
                                </Button>
                                {cartItem}
                                <Button
                                    color="hsl(26, 100%, 55%)"
                                    fontSize="20px"
                                    fontWeight="bold"
                                    onClick={addItem}
                                >
                                    +
                                </Button>
                            </Flex>
                            <Button
                                onClick={clickHandler}
                                height="50px"
                                px="30px"
                                _hover={{
                                    background: "orange.300",
                                }}
                                leftIcon={
                                    <AiOutlineShoppingCart
                                        color="white"
                                        fontWeight="bold"
                                        fontSize="23px"
                                    />
                                }
                                variant="solid"
                                bg="hsl(26, 100%, 55%)"
                                color="white"
                            >
                                Add to cart
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Flex>
        </>
    );
};
