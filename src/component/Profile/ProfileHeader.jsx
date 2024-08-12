import { Avatar, Button, Flex, Text, VStack } from "@chakra-ui/react"


const ProfileHeader = () => {
    return (
        <>
            <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: "column", sm: "row" }} >
                <Avatar src="/profilepic.png" size={{ base: "lg", md: "2xl" }} justifySelf={"center"} alignSelf={"self-start"} mx={"auto"} name="annprogrammer" border={"1px solid"} borderColor={"whiteAlpha.300"}></Avatar>
                <VStack gap={2} alignItems={"start"} mx={"auto"} flex={1}>
                    <Flex alignItems={"center"} gap={4} direction={{ base: "column", sm: "row" }}
                        justifyContent={{ base: "center", sm: "flex-start" }} w={"full"}>
                        <Text fontSize={{ base: "sm", md: "lg" }}>annprogrammer_</Text>
                        <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.500" }} size={{ base: "xs", md: "sm" }}>Edit Profile</Button>
                    </Flex>
                    <Flex gap={{ base: 2, sm: 4 }} alignItems={"center"}>
                        <Text fontSize={{ base:"xs",sm:"md" }}>
                            <Text as={"span"} fontWeight={"bold"} mr={1} >10</Text>Posts
                        </Text>
                        <Text fontSize={{ base:"xs",sm:"md" }}>
                            <Text as={"span"} fontWeight={"bold"} mr={1} >2200</Text>Followers
                        </Text>
                        <Text fontSize={{ base:"xs",sm:"md" }}>
                            <Text as={"span"} fontWeight={"bold"} mr={1}>1200</Text>Following
                        </Text>
                    </Flex>
                    <Text fontSize={"sm"} fontWeight={"bold"}>
                        As a Programmer
                    </Text>
                    <Text  fontSize={"sm"}>Tutorial that  are meant to level up your skills as a programmer.</Text>
                </VStack>
            </Flex>
        </>
    )
}

export default ProfileHeader