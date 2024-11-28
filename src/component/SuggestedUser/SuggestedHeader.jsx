import { Avatar, Box, Button, Flex } from "@chakra-ui/react"
import useLogout from "../../Hooks/useLogout"
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedHeader = () => {
    const { handleLogout, isLoggingOut } = useLogout();
    const authUser = useAuthStore(state => state.user);
    if (!authUser)return null;
    return (
        <>
            <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} >
                <Flex justifyContent={"center"} alignItems={"center"} gap={2}>
                    <Link to={`${authUser.userName}`}>
                        <Avatar src={authUser.profilePicURL}  size={"lg"}></Avatar>
                    </Link>
                    <Link to={`${authUser.userName}`}>
                        <Box fontWeight={600} fontSize={14} color={"white"}>{authUser.userName}</Box>
                    </Link>
                </Flex>
                <Button size={'xs'} background={"transparent"} _hover={{ background: "transparent" }} fontWeight={"medium"} color={"blue.500"} cursor={"pointer"} onClick={handleLogout} isLoading={isLoggingOut}>
                    Log out
                </Button>

            </Flex>
        </>
    )
}

export default SuggestedHeader