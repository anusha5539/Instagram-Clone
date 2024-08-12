import { Avatar, Box, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react"
import { AiFillHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"
import { MdDelete } from "react-icons/md";
import Comment from "./Comment";
import FeedFooter from "../FeedPosts/FeedFooter"

const ProfilePost = ({ image }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <GridItem cursor="pointer" borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"whiteAlpha.300"} position={"relative"} aspectRatio={1 / 1} onClick={onOpen}
            >
                <Flex opacity={0} _hover={{ opacity: 1 }} justifyContent={"center"} position={"absolute"} top={0} bottom={0} left={0} right={0} bg={"blackAlpha.700"} transition={"all 0.3s ease"} zIndex={1} alignItems={"center"} gap={50}>
                    <Flex gap={2}>
                        <AiFillHeart size={20} />
                        <Text fontWeight={"bold"}>90</Text>

                    </Flex>
                    <Flex gap={2}>
                        <FaComment size={20} />
                        <Text fontWeight={"bold"}>2</Text>
                    </Flex>


                </Flex>
                <Image src={image} alt="error loading" h={"100%"} w={"100%"} objectFit={"cover"}></Image>
            </GridItem>
            {/* modal content */}
            <Modal isOpen={isOpen} onClose={onClose} isCentered size={{ base: "3xl", md: "5xl" }}>
                <ModalOverlay />
                <ModalContent maxH="100vh">
                    <ModalCloseButton />
                    <ModalBody pb={5} bg={"black"} display="flex" flexDirection="column">
                        <Flex gap={4} w={{ base: "90%", sm: "70%", md: "full" }} mx={"auto"} flex="1">
                            <Box borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor="whiteAlpha.300" flex={1.5} aspectRatio={1}>
                                <Image src={image} alt="Post Pic" h={"100%"} w={"100%"} objectFit={"cover"} />
                            </Box>
                            <Flex flex={1} flexDir={"column"} px={10} display={{ base: "none", md: "flex" }}>
                                <Flex justifyContent={"space-between"} alignItems={"center"} my={5}>
                                    <Flex gap={4} alignItems={"center"}>
                                        <Avatar src={"profilepic.png"} alt="profile pic" size={"sm"} />
                                        <Text fontWeight={"bold"} fontSize={14} alignItems={"center"}>
                                            annprogrammer_
                                        </Text>
                                    </Flex>
                                    <Box _hover={{ bg: "whiteAlpha.300", color: "red.600" }} borderRadius={4} p={1} cursor={"pointer"}>
                                        <MdDelete size={20} />
                                    </Box>
                                </Flex>
                                <Divider my={4} bg={"gray.500"} />

                                {/* Scrollable comment section */}
                                <VStack w={"full"} alignItems={"start"} maxH="200px" overflowY={"auto"} flex="1">
                                    <Comment createdAt="1 day ago" username="annProgrammer_" profilePic={"/profilepic.png"} text="Nice Pic" />
                                    <Comment createdAt="2 day ago" username="Steven Venegas" profilePic={"/img1.png"} text="uhuhuhu" />
                                    <Comment createdAt="1 hour ago" username="Niki Duncan" profilePic={"/img2.png"} text="Blast one" />
                                    <Comment createdAt="1 hour ago" username="Niki Duncan" profilePic={"/img2.png"} text="Blast one" />
                                    <Comment createdAt="1 hour ago" username="Niki Duncan" profilePic={"/img2.png"} text="Blast one" />
                                    <Comment createdAt="1 hour ago" username="Niki Duncan" profilePic={"/img2.png"} text="Blast one" />
                                    <Comment createdAt="1 hour ago" username="Niki Duncan" profilePic={"/img2.png"} text="Blast one" />
                                    
                                </VStack>
                                <Divider my={4} bg={"gray.500"} />
                                <FeedFooter isProfilePage={true} />
                            </Flex>
                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>

    )
}

export default ProfilePost