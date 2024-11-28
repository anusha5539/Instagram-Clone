import { Avatar, Flex, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { timeAgo } from '../../Utils/TimeAgo'
import useUserProfileStore from '../../store/userProfileStore'

const Caption = ({ caption }) => {
    const userProfile=useUserProfileStore(state=>state.userProfile)
  return (
    <Flex gap={4} my={2} >
    <Link to={`/${userProfile.userName}`}>
        <Avatar size={"sm"} src={userProfile.profilePicURL} alt="error loading profile"></Avatar>
    </Link>

    <Flex direction="column">
        <Flex gap={2} alignItems={"center"}>
            <Link to={`/${userProfile.userName}`}>
                <Text fontSize={14} fontWeight={"bold"}>
                    {userProfile.userName}
                </Text>
            </Link>
            <Text fontSize={14}>{caption.caption}</Text>
        </Flex>

        <Text color={"gray.500"} fontSize={14}>
            {timeAgo(caption.createdAt)}
        </Text>
    </Flex>
</Flex>
  )
}

export default Caption