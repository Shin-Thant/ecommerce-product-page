import React, { useState } from "react";
import { Flex, Box, Text, Badge } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHamburger } from "react-icons/fa";

import logo from "../img/logo.svg";
import avatar from "../img/image-avatar.png";
import hamburger from "../img/icon-menu.svg";
import { useDispatch, useSelector } from "react-redux";
import { CartItems } from "./CartItems";
import { openSidebar } from "../redux/actions/sideBarAction";
import { SideBar } from "./SideBar";

export const Navbar = () => {
    const { sidebar } = useSelector((state) => state.sidebar);
    const { items, itemInfo } = useSelector((state) => state.cart);

    const [showDropdown, setShowDropdown] = useState(false);

    const dispatch = useDispatch();
    const openNav = () => {
        dispatch(openSidebar());
    };

    return (
        <>
            {sidebar && <SideBar />}
            <Flex
                width="100%"
                borderBottom="1px"
                borderColor="gray.300"
                justify="space-between"
                align="center"
                pb="2rem"
                mb={["2rem", "3rem", "5rem"]}
            >
                <FaHamburger fontSize="1.5rem" onClick={openNav} />
                <Box>
                    <Image src={logo} alt="Logo" />
                </Box>
                <Flex
                    flex="1"
                    align="center"
                    display={["none", "none", "none", "flex"]}
                >
                    <Text
                        cursor="pointer"
                        fontWeight="medium"
                        color="gray.500"
                        ml="2rem"
                    >
                        Collections
                    </Text>
                    <Text
                        cursor="pointer"
                        fontWeight="medium"
                        color="gray.500"
                        ml="2rem"
                    >
                        Men
                    </Text>
                    <Text
                        cursor="pointer"
                        fontWeight="medium"
                        color="gray.500"
                        ml="2rem"
                    >
                        Women
                    </Text>
                    <Text
                        cursor="pointer"
                        fontWeight="medium"
                        color="gray.500"
                        ml="2rem"
                    >
                        About
                    </Text>
                    <Text
                        cursor="pointer"
                        fontWeight="medium"
                        color="gray.500"
                        ml="2rem"
                    >
                        Contact
                    </Text>
                </Flex>
                <Flex align="center" position="relative">
                    <Button
                        width={["50px"]}
                        position="relative"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        <AiOutlineShoppingCart fontSize={["23px", "25px"]} />
                        {items > 0 && (
                            <Badge
                                position="absolute"
                                top="0"
                                right="-20px"
                                transform="translate(-50%, -50%)"
                                fontSize="13px"
                                bg="orange.300"
                                color="white"
                                p="4px 7px"
                                borderRadius="50%"
                            >
                                {items}
                            </Badge>
                        )}
                    </Button>
                    {showDropdown && (
                        <>
                            <Box
                                bg="white"
                                borderWidth="2px"
                                borderColor="gray.200"
                                p="10px"
                                width="280px"
                                height="250px"
                                borderRadius="lg"
                                position="absolute"
                                shadow="2xl"
                                bottom="-260px"
                                right="0"
                            >
                                <Text
                                    fontWeight="bold"
                                    width="100%"
                                    borderBottomColor="gray.200"
                                    borderBottomWidth="1px"
                                    pb="10px"
                                    mb="15px"
                                >
                                    Cart
                                </Text>
                                {items > 0 ? (
                                    <>
                                        <Box height="60%" overflow="auto">
                                            {itemInfo.map((i) => (
                                                <CartItems
                                                    key={i.id}
                                                    id={i.id}
                                                    name={i.name}
                                                    img={i.img}
                                                    price={i.price}
                                                    quantity={i.quantity}
                                                />
                                            ))}
                                        </Box>
                                        <Button
                                            color="white"
                                            width="100%"
                                            bg="hsl(26, 100%, 55%)"
                                            _hover={{
                                                background: "orange.300",
                                            }}
                                        >
                                            Checkout
                                        </Button>
                                    </>
                                ) : (
                                    <Text
                                        textAlign="center"
                                        height="100%"
                                        fontSize="15px"
                                        fontWeight="semibold"
                                    >
                                        Your Cart is empty.
                                    </Text>
                                )}
                            </Box>
                        </>
                    )}
                    <Image
                        cursor="pointer"
                        boxSize={["25px", "50px"]}
                        ml={["0.5rem", "2rem"]}
                        src={avatar}
                    />
                </Flex>
            </Flex>
        </>
    );
};
