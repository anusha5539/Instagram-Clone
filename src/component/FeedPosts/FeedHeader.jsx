import { Avatar, Box, Button, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import useFollowUser from "../../Hooks/useFollowUser"
import { timeAgo } from "../../Utils/TimeAgo";

const FeedHeader = ({ post, creatorProfile }) => {
    const {isFollowing,handleFollowUser,isUpdating}=useFollowUser(post.createBy);
    return (
        <>
            <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
                <Flex alignItems={"center"} gap={2}>
                    <Link to={`/${creatorProfile.userName}`}>
                        <Avatar src={creatorProfile.profilePicURL} alt="error loading profile" size={"sm"} />
                    </Link>

                    <Flex fontSize={12} fontWeight={"bold"} gap={2}>
                        <Link to={`/${creatorProfile.userName}`}>
                            {creatorProfile.userName}
                        </Link>
                        <Box color={"gray.500"}>. {timeAgo(post.createdAt)}</Box>

                    </Flex>
                </Flex>
                <Button
                size={"xs"}
                bg={"transparent"}
                    cursor={"pointer"}
                    fontSize={12}
                    fontWeight={"bold"}
                    color={"blue.500"}
                    _hover={{ color: "white" }}
                    transition={"0.2s ease-in-out"}
                    onClick={handleFollowUser}
                    isLoading={isUpdating}>
                    {isFollowing ? "Unfollow" : "Follow"} 
                </Button>
            </Flex>
        </>
    )
}

export default FeedHeader