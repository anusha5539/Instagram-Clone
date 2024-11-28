import { Avatar, Button, Flex, Text, useDisclosure, VStack } from "@chakra-ui/react"
import useUserProfileStore from "../../store/userProfileStore"
import useAuthStore from "../../store/authStore";
import EditProfile from "./EditProfile";
import useFollowUser from "../../Hooks/useFollowUser";


const ProfileHeader = () => {
    const {userProfile}=useUserProfileStore();
    const authUser=useAuthStore(state=>state.user);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {isFollowing,isUpdating,handleFollowUser}=useFollowUser(userProfile?.uid)

    const visitingOwnProfile=authUser && authUser.userName===userProfile.userName;
    const visitingOtherProfile=authUser && authUser.userName!==userProfile.userName;

    return (
        <>
            <Flex gap={{ base: 4, sm: 20 }} py={10} direction={{ base: "column", sm: "row" }} >
                <Avatar src={userProfile.profilePicURL} size={{ base: "lg", md: "2xl" }} justifySelf={"start"} alignSelf={"self-start"} mx={"auto"}  border={"1px solid"} borderColor={"whiteAlpha.300"}></Avatar>
                <VStack gap={3} alignItems={"start"} mx={"auto"} flex={1}>
                    <Flex alignItems={"center"} gap={10} direction={{ base: "column", sm: "row" }}
                        justifyContent={{ base: "start", sm: "flex-start" }} w={"full"}>
                        <Text fontSize={{ base: "sm", md: "lg" }}>{userProfile.userName}</Text>
                        {
                            visitingOwnProfile &&  <Button bg={"white"} color={"black"} _hover={{ bg: "whiteAlpha.500" }} size={{ base: "xs", md: "sm" }} onClick={onOpen}>Edit Profile</Button>
                        }
                        {
                            visitingOtherProfile &&  <Button bg={"blue.500"} color={"white"} _hover={{ bg: "blue.600" }} size={{ base: "xs", md: "sm" }} onClick={handleFollowUser} isLoading={isUpdating}>
                            {isFollowing? "Unfollow" :"Follow"}

                            </Button>
                        }
                       
                    </Flex>
                    <Flex gap={{ base: 2, sm: 4 }} alignItems={"center"}>
                        <Text fontSize={{ base:"xs",sm:"md" }}>
                            <Text as={"span"} fontWeight={"bold"} mr={1} >{userProfile.posts.length}</Text>Posts
                        </Text>
                        <Text fontSize={{ base:"xs",sm:"md" }}>
                            <Text as={"span"} fontWeight={"bold"} mr={1} >{userProfile.followers.length}</Text>Followers
                        </Text>
                        <Text fontSize={{ base:"xs",sm:"md" }}>
                            <Text as={"span"} fontWeight={"bold"} mr={1}>{userProfile.following.length}</Text>Following
                        </Text>
                    </Flex>
                    <Text fontSize={"sm"} fontWeight={"bold"}>
                    {userProfile.fullName}
                    </Text>
                    <Text  fontSize={"sm"}>{userProfile.bio}</Text>
                </VStack>
                {isOpen && <EditProfile isOpen={isOpen} onClose={onClose}/>}
            </Flex>
        </>
    )
}

export default ProfileHeader