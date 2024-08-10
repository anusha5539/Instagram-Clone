import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react"
import { useState } from "react";


const SuggestedUser = ({ followers, name, avatar }) => {
    const [isFollowed, setIsFollowed] = useState(true);
    return (
        <>
            <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"} mt={3}>
                <Flex alignItems={"center"} gap={2}>
                    <Avatar src={avatar} name="Ann programmer" size='md'></Avatar>
                    <VStack spacing={2}>
                        <Text fontSize={12} fontWeight={"bold"}>
                            {name}
                        </Text>
                        <Text color={"gray.500"} fontSize={11}>
                            {followers} followers
                        </Text>
                    </VStack>
                </Flex>
                <Button onClick={()=>setIsFollowed(!isFollowed)} fontSize={13} bg={"transparent"} color={"blue.500"} p={0} h={"max-content"} fontWeight={"medium"} cursor={"pointer"} _hover={{color:"white"}}>
                    {isFollowed? "Follow" :"Unfollow"}
                </Button>

            </Flex>
        </>
    )
}

export default SuggestedUser