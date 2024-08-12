import { Avatar, Flex, Text } from "@chakra-ui/react"


const Comment = ({ username, profilePic, createdAt, text }) => {
    return (
        <>
            <Flex gap={4} my={2} >
                <Avatar size={"sm"} src={profilePic} name="Profile" alt="error loading profile"></Avatar>
                <Flex direction="column">
                    <Flex gap={2}>
                        <Text fontSize={14} fontWeight={"bold"}>{username}</Text>
                        <Text fontSize={14}>{text}</Text>
                    </Flex>

                    <Text color={"gray.500"} fontSize={14}>{createdAt}</Text>
                </Flex>
            </Flex>
        </>
    )
}

export default Comment