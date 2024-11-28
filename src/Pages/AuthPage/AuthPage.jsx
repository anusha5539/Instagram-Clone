import { Box, Container, Flex, Image, Img, VStack } from "@chakra-ui/react"
import AuthForm from "../../component/AuthForm/AuthForm"


const AuthPage = () => {
    return (
        <>
            <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
                <Container maxW={"container.md"} padding={0}>
                    <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                        {/* left hand side */}
                        <Box display={{ base: "none", md: "block" }}>
                            <Img src="/auth.png" h={500} alt="Error loading"></Img>
                        </Box>
                        {/* right hand side */}
                        <VStack spacing={4} align={"stretch"}>
                            <AuthForm/>
                            <Box textAlign={"center"}>Get the app.</Box>
                            <Flex gap={4} justifyContent={"center"}>
                                <Image borderRadius={5}  src="/playstore.png" h={10} alt="error loading" ></Image>
                                <Image borderRadius={5}  src="/microsoft.png" h={10} alt="error loading" ></Image>
                            </Flex>
                        </VStack>
                    </Flex>

                </Container>
            </Flex>
        </>
    )
}

export default AuthPage