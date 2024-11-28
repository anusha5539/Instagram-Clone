import {  Box, Button, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouteLink } from "react-router-dom"
import {  InstagramLogo, InstagramMobileLogo} from "../../assets/constant"
import { BiLogOut } from "react-icons/bi"
import useLogout from "../../Hooks/useLogout"
import SidebarItem from "./SidebarItem"



const Sidebar = () => {
    const { handleLogout, isLoggingOut } = useLogout();
    return (
        <>
            <Box height={"100vh"} position={"fixed"} borderRight={"1px solid"} borderColor={"whiteAlpha.300"} py={8} top={0} left={0} px={{ base: 2, md: 4 }} >
                <Flex direction={"column"} w={"full"} h={"full"}>
                    <Link to="/" as={RouteLink} pl={2} display={{ base: "none", md: "block" }} cursor={"pointer"}>
                        <InstagramLogo />
                    </Link>
                    <Link to="/" as={RouteLink} p={2} display={{ base: "block", md: "none" }} borderRadius={6} _hover={{ bg: "whiteAlpha.200" }} cursor={"pointer"} w={{ base: 10 }}>
                        <InstagramMobileLogo />
                    </Link>
                    <Flex direction={"column"} mt={10} gap={4} cursor={"pointer"}>
                        <SidebarItem/>
                    </Flex>
                    <Tooltip
                        label={"Logout"}
                        placement={"right"}
                        display={{ base: "block", md: "none" }}
                        ml={1}
                        openDelay={500} >
                        <Flex
                            onClick={handleLogout}
                            alignItems={"center"}
                            mt={"auto"}
                            gap={4}
                            _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }}
                        >
                            <BiLogOut size={25} />
                            <Button variant={"ghost"} _hover={{ bg: "transparent" }} isLoading={isLoggingOut} display={{ base: "none", md: "block" }}>Logout</Button>
                        </Flex>
                    </Tooltip>

                </Flex>

            </Box>
        </>
    )
}

export default Sidebar