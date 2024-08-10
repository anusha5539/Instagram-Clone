import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouteLink } from "react-router-dom"
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../assets/constant"
import { AiFillHome } from "react-icons/ai"
import { BiLogOut } from "react-icons/bi"


const Sidebar = () => {
    const Sidebar = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            link: "/"
        },
        {
            icon: <SearchLogo />,
            text: "Search",
        },
        {
            icon: <NotificationsLogo />,
            text: "Notification",
        },
        {
            icon: <CreatePostLogo />,
            text: "Create",
        },
        {
            icon: <Avatar size={"sm"} name={"ann"} src="/profilepic.png" />,
            text: "Profile",
            link: "/anuProgrammer"
        },
    ]
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
                        {Sidebar.map((items, index) => (
                            <Tooltip key={index}
                                label={items.text}
                                placement={"right"}
                                display={{ base: "block", md: "none" }}
                                ml={1}
                                openDelay={500}>
                                <Link display={"flex"}
                                    to={items.link || null}
                                    as={RouteLink}
                                    alignItems={"center"}
                                    gap={4}
                                    _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }}
                                >{items.icon}
                                    <Box display={{ base: "none", md: "block" }}>{items.text}</Box>
                                </Link>

                            </Tooltip>
                        ))}
                    </Flex>
                    <Tooltip
                        label={"Logout"}
                        placement={"right"}
                        display={{ base: "block", md: "none" }}
                        ml={1}
                        openDelay={500} >
                        <Link display={"flex"}
                            to={"/auth"}
                            as={RouteLink}
                            alignItems={"center"}
                            mt={"auto"}
                            gap={4}
                            _hover={{ bg: "whiteAlpha.400" }} borderRadius={6} p={2} w={{ base: 10, md: "full" }}
                        ><BiLogOut size={25} />
                            <Box display={{ base: "none", md: "block" }}>Logout</Box>
                        </Link>
                    </Tooltip>

                </Flex>

            </Box>
        </>
    )
}

export default Sidebar