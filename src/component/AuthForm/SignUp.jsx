import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Alert, AlertIcon, Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react"
import { useState } from "react"
import signupwithemailandpassword from "/src/Hooks/useSignupwithemailandpassword.js";


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [inputs, setInputs] = useState({
        email: "",
        userName: "",
        fullName: "",
        password: "",

    })
    const { signup, loading, error } = signupwithemailandpassword();
    return (
        <>
            <Input type="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} placeholder="Email" fontSize={14} size={"sm"}></Input>
            <Input type="text" value={inputs.userName} onChange={(e) => setInputs({ ...inputs, userName: e.target.value })} placeholder="username" fontSize={14} size={"sm"}></Input>
            <Input type="text" value={inputs.fullName} onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })} placeholder="fullname" fontSize={14} size={"sm"} ></Input>
            <InputGroup>
                <Input type={showPassword ? "text" : "password"} value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} placeholder="Password" fontSize={14} size={"sm"}></Input>
                <InputRightElement h={"full"}>
                    <Button variant={"ghost"} size={"sm"} onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                </InputRightElement>
            </InputGroup>
            {error && (
                <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12}>
                        {error.message}
                    </AlertIcon>
                </Alert>
            )}


            <Button colorScheme='blue' w={"full"} size="sm" fontSize={14} onClick={() => signup(inputs)} isLoading={loading}>
                Sign Up
            </Button>
        </>

    )
}

export default SignUp