import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react"
import useFollowUser from '/src/Hooks/useFollowUser'
import useAuthStore from "../../store/authStore";
import { Link } from "react-router-dom";

const SuggestedUser = ({ user, setUser }) => {
    const { isFollowing, isUpdating, handleFollowUser } = useFollowUser(user.uid);
    const authUser = useAuthStore(state => state.user);
    const onFollowUser = async () => {
        await handleFollowUser();
        setUser({
            ...user,
            followers: isFollowing ? user.followers.filter((follower) => follower.uid !== authUser.uid) : [...user.followers, authUser],
        })
    }

    return (
        <>
            <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} mt={3}>
                <Flex alignItems={"center"} gap={2}>
                    <Link to={`${user.userName}`}>
                        <Avatar src={user.profilePicURL} name="Ann programmer" size='md'></Avatar>
                    </Link>
                    <VStack spacing={2}>
                        <Link to={`${user.userName}`}>
                            <Text fontSize={12} fontWeight={"bold"}>
                                {user.userName}
                            </Text>
                        </Link>
                        <Text color={"gray.500"} fontSize={11}>
                            {user.followers.length} followers
                        </Text>
                    </VStack>
                </Flex>
                {authUser.uid !== user.uid && (
                    <Button onClick={onFollowUser} bg={"transparent"} color={"blue.500"} p={0} h={"max-content"} fontWeight={"medium"} cursor={"pointer"} _hover={{ color: "white" }} isLoading={isUpdating}>
                        {isFollowing ? "Unfollow" : "Follow"}
                    </Button>
                )}

            </Flex>
        </>
    )
}

export default SuggestedUser