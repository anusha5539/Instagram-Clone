import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent,  ModalHeader, ModalOverlay, Tooltip, useDisclosure } from "@chakra-ui/react";
import { SearchLogo } from "../../assets/constant";
import { useRef } from "react";
import useSearchUser from "../../Hooks/useSearchUser";
import SuggestedUser from "../SuggestedUser/SuggestedUser";

const Search = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const searchRef = useRef(null);
    const [ isLoading, user, getUserProfile,setUser ] = useSearchUser();

    const handleSearchUser = (e) => {
        e.preventDefault();
        getUserProfile(searchRef.current.value);
    }
    console.log(user);
    return (
        <>
            <Tooltip
                hasArrow
                label={"Search"}
                placement='right'
                ml={1}
                openDelay={500}
                display={{ base: "block", md: "none" }}
            >
                <Flex
                    alignItems={"center"}
                    gap={4}
                    _hover={{ bg: "whiteAlpha.400" }}
                    borderRadius={6}
                    p={2}
                    w={{ base: 10, md: "full" }}
                    justifyContent={{ base: "center", md: "flex-start" }}
                    onClick={onOpen}
                >
                    <SearchLogo />
                    <Box display={{ base: "none", md: "block" }} >Search</Box>
                </Flex>
            </Tooltip>

            {/* Modal */}
            <Modal isOpen={isOpen} onClose={onClose} motionPreset="sideInLeft">
                <ModalOverlay />
                <ModalContent bg="black " border={"1pz solid gray"} maxW={"400px"}>
                    <ModalHeader>Search User</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={"6px"}>
                        <form onSubmit={handleSearchUser}>
                            <FormControl>
                                <FormLabel>UserName</FormLabel>
                                <Input placeholder="programmer" ref={searchRef} />
                            </FormControl>
                            <Flex w={"full"} justifyContent={"flex-end"}>
                                <Button type="submit" ml={'auto'} size={"sm"} my={4}  isLoading={isLoading}>Search</Button>
                            </Flex>
                        </form>
                        {user && <SuggestedUser user={user} setUser={setUser}/>}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Search;