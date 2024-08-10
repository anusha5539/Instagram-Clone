import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text } from "@chakra-ui/react"
import { useState } from "react"

import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constant";

const FeedFooter = ({username}) => {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleClick = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        }
        else {
            setLiked(true);
            setLikes(likes + 1);
        }
    }
    return (
        <Box mb={10}>
            <Flex alignItems={"center"} gap={4} width={"full"} pt={0} mb={2} mt={4}>
                <Box onClick={handleClick} cursor={"pointer"} fontSize={18}>
                    {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
                </Box>
                <Box fontSize={18} cursor={"pointer"}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontSize={"sm"} fontWeight={600}>
                {likes} likes
            </Text>
            <Flex gap={2} fontWeight={700} fontSize='sm' my={2}>
                {username}
                <Text fontWeight={400}>Feeling good</Text>
            </Flex>
            <Text fontSize={"sm"} color={"gray"}>
                View all 1,000 comments
            </Text>
            <Flex justifyContent={"space-between"} alignItems={"center"} gap={4} w={"full"}>
                <InputGroup size='sm'>
                    <Input variant='flushed' placeholder='Add a comment.....' fontSize={14} />
                    <InputRightElement>
                        <Button bg={"transparent"} color={"blue.500"} cursor={"pointer"} fontSize={14} fontWeight={600} _hover={{ color:"white" }} >Post</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>
        </Box>
    )
}

export default FeedFooter