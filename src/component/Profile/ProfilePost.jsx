import { Avatar, Button, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import Comment from "../Comment/Comment";
import FeedFooter from "../FeedPosts/FeedFooter"
import useUserProfileStore from "../../store/userProfileStore";
import useAuthStore from "../../store/authStore";
import { useState } from "react";
import { deleteObject, ref } from "firebase/storage";
import { firestore, storage } from "../../Firebase/firebase";
import { arrayRemove, deleteDoc, doc, updateDoc } from "firebase/firestore";
import useShowToast from "../../Hooks/useShowToast";
import usePostStore from "../../store/postStore";
import Caption from "../Comment/Caption";



const ProfilePost = ({ post }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const userProfile = useUserProfileStore((state) => state.userProfile);
    const authUser = useAuthStore((state) => state.user)
    const showToast = useShowToast()
    const [isDeleting, setIsDeleting] = useState(false);
    const deletePost = usePostStore(state => state.deletePost);
    const decreamentPostCount = useUserProfileStore(state => state.deletePost);

    const handleDeletePost = async () => {
        if (!window.confirm("Are you sure you want to delete the post?")) return;
        if (isDeleting) return;
        setIsDeleting(true)
        try {
            const imageRef = ref(storage, `posts/${post.id}`);
            await deleteObject(imageRef);
            const userRef = doc(firestore, "users", authUser.uid)
            const postRef = doc(firestore, "posts", post.id);
            await deleteDoc(postRef);


            await updateDoc(userRef, {
                posts: arrayRemove(post.id)
            })
            deletePost(post.id)
            decreamentPostCount(post.id)
            showToast("Success", "Post deleted Successfully", "success")
        }
        catch (error) {
            showToast("Error", error.message, "error");
        }
        finally {
            setIsDeleting(false);
        }
    }

    return (
        <>
            <GridItem cursor="pointer" borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} position={"relative"} aspectRatio={1 / 1} onClick={onOpen}
            >
                <Flex opacity={0} _hover={{ opacity: 1 }} justifyContent={"center"} position={"absolute"} top={0} bottom={0} left={0} right={0} bg={"blackAlpha.700"} transition={"all 0.3s ease"} zIndex={1} alignItems={"center"} gap={50}>
                    <Flex gap={2}>
                        <AiFillHeart size={20} />
                        <Text fontWeight={"bold"}>{post.likes.length}</Text>

                    </Flex>
                    <Flex gap={2}>
                        <FaComment size={20} />
                        <Text fontWeight={"bold"}>{post.comments.length}</Text>
                    </Flex>


                </Flex>
                <Image src={post.imageURL} alt="error loading" h={"100%"} w={"100%"} objectFit={"cover"}></Image>
            </GridItem>

            {/* modal content */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: "3xl", md: "5xl" }}>
                <ModalOverlay />
                <ModalContent maxH="100vh">
                    <ModalCloseButton />
                    <ModalBody pb={5} bg={"black"} display="flex" flexDirection="column">
                        <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"} flex="1" maxH={"90vh"} minH={"50vh"}>
                            <Flex borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor="whiteAlpha.300" flex={1.5} aspectRatio={1} justifyContent={"center"} alignItems={"center"}>
                                <Image src={post.imageURL} alt="Post Pic" h={"100%"} w={"100%"} objectFit={"cover"} />
                            </Flex>
                            <Flex flex={1} flexDir={"column"} px={10} display={{ base: "none", md: "flex" }}>
                                <Flex justifyContent={"space-between"} alignItems={"center"} my={5}>
                                    <Flex gap={4} alignItems={"center"}>
                                        <Avatar src={userProfile.profilePicURL} alt="profile pic" size={"sm"} />
                                        <Text fontWeight={"bold"} fontSize={14} alignItems={"center"}>
                                            {userProfile.userName}
                                        </Text>
                                    </Flex>
                                    {authUser?.uid === userProfile.uid &&
                                        <Button
                                            size={"sm"} bg={"transparent"} _hover={{ bg: "whiteAlpha.300", color: "red.600" }} borderRadius={4} p={1} cursor={"pointer"} onClick={handleDeletePost} isLoading={isDeleting}>
                                            <MdDelete size={20} />
                                        </Button>}


                                </Flex>
                                <Divider my={4} bg={"gray.500"} />

                                {/* Scrollable comment section */}
                                <VStack w={"full"} alignItems={"start"} maxH="200px" overflowY={"auto"} flex="1">
                                    {/* CAPTION */}
                                    {post.caption && <Caption caption={post} />}
                                    {/* COMMENTS */}
                                    {post.comments.map(comment => (
                                        <Comment key={comment.id || comment.createdAt} comment={comment} />
                                    ))}
                                </VStack>
                                <Divider my={4} bg={"gray.500"} />
                                <FeedFooter isProfilePage={true} post={post} />
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>

    )
}

export default ProfilePost