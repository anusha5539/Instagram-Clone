import { Flex, Text } from "@chakra-ui/react"
import { BsBookmark, BsGrid3X3, BsSuitHeart } from "react-icons/bs";


const ProfileTabs = () => {
    return (
        <>
            <Flex justifyContent={"center"} alignItems={"center"} gap={{ base: "sm", md: "xl" }} >
                <Flex borderTop={"1px solid white"} gap={2} alignItems={"center"} p={3} cursor={"pointer"}>
                    <BsGrid3X3 size={20} />
                    <Text fontSize={16} display={{ base: "none", sm: "block" }}>Posts</Text>
                </Flex>
                <Flex  gap={2} alignItems={"center"} p={3} cursor={"pointer"}>
                    <BsBookmark size={20} />
                    <Text fontSize={16} display={{ base: "none", sm: "block" }}>Saved</Text>
                </Flex>
                <Flex  gap={2} alignItems={"center"} p={3} cursor={"pointer"}>
                    <BsSuitHeart size={20} />
                    <Text fontSize={16} display={{ base: "none", sm: "block" }}>Liked</Text>
                </Flex>
            </Flex>
        </>
    )
}

export default ProfileTabs