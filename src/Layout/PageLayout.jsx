import { Box, Flex, Spinner } from "@chakra-ui/react"
import Sidebar from "../component/Sidebar/Sidebar"
import { useLocation } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/firebase";
import Navbar from "../component/Navbar";


const PageLayout = ({ children }) => {
    const { pathname } = useLocation();
    const [user, loading] = useAuthState(auth);
    const canRenderSidebar = pathname !== ('/auth') && user;
    const canRenderNavbar = !user && !loading && pathname !== '/auth';

    const isUserAuth = !user && loading;
    if (isUserAuth) {
        return <Pagespinner />
    }
    return (
        <Flex flexDirection={canRenderNavbar ? "column" : "row"}>
            {/* sidebar */}
            {canRenderSidebar ?
                <Box w={{ base: "70px", md: "240px" }}>
                    <Sidebar />
                </Box> : null}

            {/* navbar */}
            {canRenderNavbar ? <Navbar /> : null}

            {/* the right side of the  page */}
            <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}  >
                {children}
            </Box>
        </Flex>

    )
}

export default PageLayout

const Pagespinner = () => {
    return (
        <Flex flexDir={"column"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
        <Spinner size={"xl"}/>
        </Flex>
    )
}