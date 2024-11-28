import { Avatar, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react"
import useGetUserProfileById from "../../Hooks/useGetUserProfileById"
import { Link } from "react-router-dom"
import { timeAgo } from "../../Utils/TimeAgo"


const Comment = ({ comment }) => {
    const { userProfile, isLoading } = useGetUserProfileById(comment.createdBy)
    if (isLoading) return <CommentSkeleton />
    return (
        <>
            <Flex gap={4} my={2} >
                <Link to={`/${userProfile.userName}`}>
                    <Avatar size={"sm"} src={userProfile.profilePicURL} alt="error loading profile"></Avatar>
                </Link>

                <Flex direction="column">
                    <Flex gap={2} >
                        <Link to={`/${userProfile.userName}`}>
                            <Text fontSize={14} fontWeight={"bold"} alignItems={"center"}>
                                {userProfile.userName}
                            </Text>
                        </Link>
                        <Text fontSize={14} >{comment.comment}</Text>
                    </Flex>

                    <Text color={"gray.500"} fontSize={14}>
                        {timeAgo(comment.createdAt)}
                    </Text>
                </Flex>
            </Flex>
        </>
    )
}

export default Comment

const CommentSkeleton = () => {
    <Flex gap={4} w={"full"} alignItems={"center"}>
        <SkeletonCircle h={10} w='10' />
        <Flex gap={1} flexDir={"column"}>
            <Skeleton height={2} width={100} />
            <Skeleton height={2} width={50} />
        </Flex>
    </Flex>
}