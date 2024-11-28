import { Container, Flex, Link, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react"
import ProfileHeader from "../../component/Profile/ProfileHeader"
import ProfileTabs from "../../component/Profile/ProfileTabs"
import ProfilePosts from "../../component/Profile/ProfilePosts"
import { useParams } from "react-router-dom"
import useGetUserProfileByUsername from "../../Hooks/useGetUserProfileByUsername"
import {Link as RouterLink} from "react-router-dom";

const ProfilePage = () => {
    const {username}=useParams();
    const {isLoading,userProfile}=useGetUserProfileByUsername(username);

    // if there is no user
    const userNotFound=!isLoading && !userProfile
    if(userNotFound) return <UserNotFound/>
    return (
        <>
            <Container maxW={"container.lg"} py={5}>
                <Flex alignItems={{sm:"start",base:"center"}} w={"full"} py={10} px={4} pl={{ base: "4", md: 10 }} mx={"auto"} flexDirection={"column"}>
                   {!isLoading && userProfile && <ProfileHeader/>}
                   {isLoading && <ProfileHeaderSkeleton/>
                   }
                </Flex>
                <Flex px={{ base:2, sm:4 }} maxW={"full"} mx={"auto"} borderTop={"1px solid"} borderColor={"whiteAlpha.300"} direction="column">
                   <ProfileTabs/>
                   <ProfilePosts/>
                </Flex>
            </Container>
        </>
    )
}

export default ProfilePage

// Profile header skeleton
const ProfileHeaderSkeleton=()=>{
return(
    <Flex gap={{ base:4, sm:10 }} py={10} direction={{base:"column",sm:"row"}} justifyContent={"center"} alignItems={"center"}>
        <SkeletonCircle size={24}/>
        <VStack alignItems={{ base:"center" ,sm:"flex-start"}} gap={2} mx={"auto"} flex={1}>
            <Skeleton height='12px' width='150px'/>
            <Skeleton height='12px' width='100px'/>
        </VStack>
    </Flex>
)
}


// user not found
const UserNotFound=()=>{
    return(
        <Flex flexDir="column" textAlign={"center"} mx={"auto"}>
            <Text fontSize={"2xl"}>User Not Found</Text>
            <Link as={RouterLink} to={"/"} color={"blue.500"} w={"max-content"} mx={"auto"}>Go Home</Link>
        </Flex>
    )
}