import { Avatar, Box, Flex } from "@chakra-ui/react"

const FeedHeader = ({username,avatar}) => {
  return (
    <>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} my={2}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar src={avatar} alt="error loading profile" size={"sm"}/>
                <Flex fontSize={12} fontWeight={"bold"}  gap={2}>
                    {username}
                    <Box color={"gray.500"}>. 1w</Box>

                </Flex>
            </Flex>
            <Box 
            cursor={"pointer"}
            fontSize={12}
            fontWeight={"bold"}
            color={"blue.500"}
            _hover={{color:"white"}}
            transition={"0.2s ease-in-out"}>
                Unfollow
            </Box>
        </Flex>
    </>
  )
}

export default FeedHeader