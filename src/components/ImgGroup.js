import { Image } from "@chakra-ui/image";
import { Box, Flex } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import product1 from "../img/image-product-1.jpg";
import product1Thumb from "../img/image-product-1-thumbnail.jpg";
import product2 from "../img/image-product-2.jpg";
import product2Thumb from "../img/image-product-2-thumbnail.jpg";
import product3 from "../img/image-product-3.jpg";
import product3Thumb from "../img/image-product-3-thumbnail.jpg";
import product4 from "../img/image-product-4.jpg";
import product4Thumb from "../img/image-product-4-thumbnail.jpg";
import close from "../img/icon-close.svg";
import { Button } from "@chakra-ui/button";

export const ImgPreviewGroup = ({ viewDetails }) => {
    const [focusItem, setFocusItem] = useState("item-one");
    const [mainImg, setMainImg] = useState(product1);

    const opacity = "0.4";
    const border = "3px solid hsl(26, 100%, 55%)";

    const changeImg = (item) => {
        switch (item) {
            case "item-one":
                setMainImg(product1);
                setFocusItem("item-one");
                break;
            case "item-two":
                setMainImg(product2);
                setFocusItem("item-two");
                break;
            case "item-three":
                setMainImg(product3);
                setFocusItem("item-three");
                break;
            case "item-four":
                setMainImg(product4);
                setFocusItem("item-four");
                break;
            default:
                setFocusItem("");
        }
    };

    return (
        <Box flex="1">
            <Flex justify="center" width="100%">
                <Image
                    width="80%"
                    onClick={viewDetails}
                    borderRadius="2xl"
                    cursor="pointer"
                    src={mainImg}
                    alt=""
                    mb="1.5rem"
                />
            </Flex>
            <Flex align="center" justify="space-around">
                <Box
                    width={["17%", "17%", "19%"]}
                    border={focusItem === "item-one" && border}
                    borderRadius="2xl"
                    display="inline-block"
                >
                    <Image
                        onClick={() => changeImg("item-one")}
                        borderRadius="xl"
                        cursor="pointer"
                        opacity={focusItem === "item-one" && opacity}
                        src={product1Thumb}
                        alt=""
                    />
                </Box>
                <Box
                    width={["17%", "17%", "19%"]}
                    border={focusItem === "item-two" && border}
                    borderRadius="2xl"
                    display="inline-block"
                >
                    <Image
                        onClick={() => changeImg("item-two")}
                        borderRadius="xl"
                        cursor="pointer"
                        opacity={focusItem === "item-two" && opacity}
                        src={product2Thumb}
                        alt=""
                    />
                </Box>
                <Box
                    width={["17%", "17%", "19%"]}
                    border={focusItem === "item-three" && border}
                    borderRadius="2xl"
                    display="inline-block"
                >
                    <Image
                        onClick={() => changeImg("item-three")}
                        borderRadius="xl"
                        cursor="pointer"
                        opacity={focusItem === "item-three" && opacity}
                        src={product3Thumb}
                        alt=""
                    />
                </Box>
                <Box
                    width={["17%", "17%", "19%"]}
                    border={focusItem === "item-four" && border}
                    borderRadius="2xl"
                    display="inline-block"
                >
                    <Image
                        onClick={() => changeImg("item-four")}
                        borderRadius="xl"
                        cursor="pointer"
                        opacity={focusItem === "item-four" && opacity}
                        src={product4Thumb}
                        alt=""
                    />
                </Box>
            </Flex>
        </Box>
    );
};

export const ImgDetailsGroup = ({ exitDetails }) => {
    const [focusItem, setFocusItem] = useState(1);
    const [mainImg, setMainImg] = useState(product1);

    const opacity = "0.4";
    const border = "3px solid hsl(26, 100%, 55%)";

    const changeImg = (item) => {
        switch (item) {
            case 1:
                setMainImg(product1);
                setFocusItem(1);
                break;
            case 2:
                setMainImg(product2);
                setFocusItem(2);
                break;
            case 3:
                setMainImg(product3);
                setFocusItem(3);
                break;
            case 4:
                setMainImg(product4);
                setFocusItem(4);
                break;
            default:
                setFocusItem(1);
        }
    };

    useEffect(() => {
        switch (focusItem) {
            case 1:
                setMainImg(product1);
                break;
            case 2:
                setMainImg(product2);
                break;
            case 3:
                setMainImg(product3);
                break;
            case 4:
                setMainImg(product4);
                break;
            default:
                setMainImg(product1);
        }
    }, [focusItem]);

    return (
        <Flex
            display={["none", "flex"]}
            bg="hsla(0, 0%, 0%, 0.75)"
            position="fixed"
            top="0"
            right="0"
            width="100vw"
            height="100%"
            zIndex="2"
            justify="center"
            align="center"
            direction="column"
        >
            <Flex
                align="center"
                direction="column"
                width={["100%", "70%", "50%"]}
                color="white"
            >
                <Image
                    src={close}
                    alt=""
                    alignSelf="right"
                    cursor="pointer"
                    onClick={exitDetails}
                />

                <Box
                    width="60%"
                    mt="10px"
                    mb={["25px", "20px"]}
                    position="relative"
                >
                    <Button
                        position="absolute"
                        top="50%"
                        left="-20px"
                        px="0"
                        width={["10px", "20px"]}
                        borderRadius="50%"
                        onClick={() => {
                            if (focusItem > 1) {
                                setFocusItem(focusItem - 1);
                            } else {
                                setFocusItem(4);
                            }
                        }}
                    >
                        <IoIosArrowBack fontSize={["1.5rem", "2rem"]} />
                    </Button>
                    <Image
                        src={mainImg}
                        alt=""
                        width="100%"
                        borderRadius="xl"
                    />
                    <Button
                        position="absolute"
                        top="50%"
                        right="-20px"
                        px="0"
                        width={["10px", "20px"]}
                        borderRadius="50%"
                        onClick={() => {
                            if (focusItem < 4) {
                                setFocusItem(focusItem + 1);
                            } else {
                                setFocusItem(1);
                            }
                        }}
                    >
                        <IoIosArrowForward fontSize={["1.5rem", "2rem"]} />
                    </Button>
                </Box>

                <Flex align="center" justify="center">
                    <Box
                        mx={["8px", "10px", "10px"]}
                        width={["10%", "13%", "13%"]}
                        bg="white"
                        border={focusItem === 1 && border}
                        borderRadius="2xl"
                        display="inline-block"
                    >
                        <Image
                            onClick={() => changeImg(1)}
                            borderRadius="xl"
                            cursor="pointer"
                            opacity={focusItem === 1 && opacity}
                            src={product1Thumb}
                            alt=""
                        />
                    </Box>
                    <Box
                        mx={["8px", "10px", "10px"]}
                        width={["10%", "13%", "13%"]}
                        bg="white"
                        border={focusItem === 2 && border}
                        borderRadius="2xl"
                        display="inline-block"
                    >
                        <Image
                            onClick={() => changeImg(2)}
                            borderRadius="xl"
                            cursor="pointer"
                            opacity={focusItem === 2 && opacity}
                            src={product2Thumb}
                            alt=""
                        />
                    </Box>
                    <Box
                        mx={["8px", "10px", "10px"]}
                        width={["10%", "13%", "13%"]}
                        bg="white"
                        border={focusItem === 3 && border}
                        borderRadius="2xl"
                        display="inline-block"
                    >
                        <Image
                            onClick={() => changeImg(3)}
                            borderRadius="xl"
                            cursor="pointer"
                            opacity={focusItem === 3 && opacity}
                            src={product3Thumb}
                            alt=""
                        />
                    </Box>
                    <Box
                        mx={["8px", "10px", "10px"]}
                        width={["10%", "13%", "13%"]}
                        bg="white"
                        border={focusItem === 4 && border}
                        borderRadius="2xl"
                        display="inline-block"
                    >
                        <Image
                            onClick={() => changeImg(4)}
                            borderRadius="xl"
                            cursor="pointer"
                            opacity={focusItem === 4 && opacity}
                            src={product4Thumb}
                            alt=""
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};
