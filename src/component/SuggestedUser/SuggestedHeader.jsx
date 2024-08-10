import { Avatar, Box, Flex, Link } from "@chakra-ui/react"
import { Link as Routelink } from "react-router-dom"

const SuggestedHeader = () => {
    return (
        <>
            <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} >
                <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
                    <Avatar src="/profilepic.png" name="as a programmer" size={"lg"}></Avatar>
                    <Box fontWeight={600} fontSize={14}>annprogrammer__</Box>
                </Flex>
                <Link to="/auth" as={Routelink} fontSize={14} fontWeight={"medium"} color={"blue.500"} cursor={"pointer"} style={{ textDecoration:"none" }} _hover={{color:"white"}}>
                    Log out
                </Link>

            </Flex>
        </>
    )
}

export default SuggestedHeader