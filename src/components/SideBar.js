import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { MdClose } from "react-icons/md";

import { Button } from "@chakra-ui/button";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../redux/actions/sideBarAction";

export const SideBar = () => {
    const dispatch = useDispatch();
    const closeNav = () => {
        // close();
        dispatch(closeSidebar());
    };

    return (
        <Box
            zIndex="100"
            position="fixed"
            top="0"
            left="0"
            bg="hsla(0, 0%, 0%, 0.75)"
            width="100%"
            height="100vh"
        >
            <Box width="65%" bg="white" height="100%" p="0.8rem" py="1rem">
                <Button onClick={closeNav}>
                    <MdClose fontSize="1.5rem" color="black" />
                </Button>

                <Text
                    fontWeight="bold"
                    borderRadius="md"
                    _active={{ background: "blue.100" }}
                    p="10px"
                    color="gray.500"
                    mt="1.5rem"
                >
                    Collections
                </Text>
                <Text
                    fontWeight="bold"
                    borderRadius="md"
                    _active={{ background: "blue.100" }}
                    p="10px"
                    color="gray.500"
                    mt="1.5rem"
                >
                    Men
                </Text>
                <Text
                    fontWeight="bold"
                    borderRadius="md"
                    _active={{ background: "blue.100" }}
                    p="10px"
                    color="gray.500"
                    mt="1.5rem"
                >
                    Women
                </Text>
                <Text
                    fontWeight="bold"
                    borderRadius="md"
                    _active={{ background: "blue.100" }}
                    p="10px"
                    color="gray.500"
                    mt="1.5rem"
                >
                    About
                </Text>
                <Text
                    fontWeight="bold"
                    borderRadius="md"
                    _active={{ background: "blue.100" }}
                    p="10px"
                    color="gray.500"
                    mt="1.5rem"
                >
                    Contact
                </Text>
            </Box>
        </Box>
    );
};
