import { Box, Container, Flex, Link, Text } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"
import useSuggestedUser from "../../Hooks/useSuggestedUser"


const SuggestedUsers = () => {
    const { isLoading, suggestedUsers } = useSuggestedUser();
    if (isLoading) return null;
    return (
        <Container maxW={"container.sm"} py={10}>
            <SuggestedHeader />

            {/* suggested box */}
            {suggestedUsers.length !== 0 &&
                <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
                    <Text color={"gray.500"} fontSize={12} fontWeight={"bold"}>
                        Suggested for you
                    </Text>
                    <Text color={"white"} _hover={{ color: "gray.500" }} fontSize={12} fontWeight={"bold"} cursor={"pointer"}>See all</Text>
                </Flex>
            }

            {/* suggested people box */}
            {suggestedUsers.map((user) => (
                <SuggestedUser user={user} key={user.id} />
            ))}

            {/*  */}
            <Box color={"gray.500"} fontSize={12} mt={5} alignSelf={"start"}>
                © 2023 Built by {" "}
                <Link style={{ textDecoration: "none" }} href="https://www.youtube.com/" target='_blank' color="blue.500" fontSize={14}> As a programmer</Link>
            </Box>
        </Container>
    )
}

export default SuggestedUsers