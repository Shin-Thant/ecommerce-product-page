import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
    sm: "530px",
    md: "750px",
    lg: "950px",
});

function App() {
    const [sidebarStatus, setSidebarStatus] = useState(false);

    const close = () => {
        setSidebarStatus(false);
    };
    const open = () => {
        setSidebarStatus(true);
    };

    return (
        <Box width={["90%", "80%"]} mx="auto" my="2rem">
            <Navbar open={open} />
            <Main close={close} />
        </Box>
    );
}

export default App;
