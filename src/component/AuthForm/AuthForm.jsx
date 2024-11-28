import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react"
import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";


const AuthForm = () => {
    const [isLogin, setLogin] = useState(true);

    return (
        <>
            <Box border={"1px solid gray"} padding={5} borderRadius={4}>
                <VStack spacing={4}>
                    <Image src="/logo.png" alt="Error loading Image" h={20} cursor={"pointer"} />
                    {isLogin ? <Login /> : <SignUp />}
                    {/*----------------------- Or--------------------- */}
                    <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"} >
                        <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                        <Text color={"white"} mx={1}>OR</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                    </Flex>

                    {/* google login */}
                    <GoogleAuth prefix={isLogin?"Login" :"Sign Up"}/>
                </VStack>
            </Box>
            {/* another box */}
            <Box border={"1px solid gray"} borderRadius={4} padding={5}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
                    <Box fontSize={14} mx={2}>
                        {isLogin ? "Don't have an account?" : "Already have an account?"}
                    </Box>
                    <Box onClick={() => setLogin(!isLogin)} cursor={"pointer"} fontSize={14} mx={2} color={"blue.500"}>
                        {isLogin ? "Sign Up" : "Sign In"}
                    </Box>
                </Flex>


            </Box>
        </>

    )
}

export default AuthForm