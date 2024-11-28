import { Alert, AlertIcon, Button, Input } from "@chakra-ui/react"
import { useState } from "react";
import useLogin from "../../Hooks/useLogin";


const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    })
    const { login, error, loading } = useLogin();
    return (
        <>
            <Input type="email" value={inputs.email} onChange={(e) => setInputs({ ...inputs, email: e.target.value })} placeholder="Email" fontSize={14} ></Input>
            <Input type="password" value={inputs.password} onChange={(e) => setInputs({ ...inputs, password: e.target.value })} placeholder="Password" fontSize={14}></Input>
            {error && (
                <Alert status="error" fontSize={13} p={2} borderRadius={4}>
                    <AlertIcon fontSize={12}>
                        {error.message}
                    </AlertIcon>
                </Alert>
            )}

            <Button colorScheme='blue' w={"full"} size="sm" fontSize={14} onClick={() => login(inputs)} loading={loading}>
                Login
            </Button>
        </>
    )
}

export default Login