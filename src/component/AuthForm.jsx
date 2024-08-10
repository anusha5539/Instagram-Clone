import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { useNavigate } from "react-router-dom";


const AuthForm = () => {
    const [isLogin, setLogin] = useState(true);
    const navigate=useNavigate();
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    })

    const handleClick = () => {
        if(!inputs.email || !inputs.password ){
           alert("Please fill all the field")
        }
        else{
            navigate('/');
        }
    }
    return (
        <>
            <Box border={"1px solid gray"} padding={5} borderRadius={4}>
                <VStack spacing={4}>
                    <Image src="/logo.png" alt="Error loading Image" h={20} cursor={"pointer"} />

                    {/* input */}
                    <Input type="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} placeholder="Email" fontSize={14} ></Input>
                    <Input type="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} placeholder="Password" fontSize={14}></Input>
                    {isLogin ? null : <Input type="password" placeholder="Confirm password" value={inputs.confirmpassword} onChange={(e)=>setInputs({...inputs,confirmpassword:e.target.value})} fontSize={14}></Input>}

                    {/* button  */}
                    <Button onClick={handleClick} colorScheme='blue' w={"full"} size="sm" fontSize={14}>
                        {isLogin ? "Login" : "Sign Up"}
                    </Button>

                    {/*----------------------- Or--------------------- */}
                    <Flex justifyContent={"center"} alignItems={"center"} my={4} gap={1} w={"full"} >
                        <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                        <Text color={"white"} mx={1}>OR</Text>
                        <Box flex={2} h={"1px"} bg={"gray.400"}></Box>
                    </Flex>

                    {/* google login */}
                    <Flex justifyContent={"center"} cursor={"pointer"} textAlign={"center"} gap={1}>
                        <Image src="/google.png" h={6} alt="Google icon"></Image>
                        <Text color={"blue.500 "} cursor={"pointer"} mx={2}>Log In with Google</Text>
                    </Flex>
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