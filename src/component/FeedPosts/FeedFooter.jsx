import { Box, Button, Flex, Input, InputGroup, InputRightElement, Text, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"

import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constant";
import usePostComment from "../../Hooks/usePostComment";
import useLikePost from "../../Hooks/useLikePost";
import useAuthStore from "../../store/authStore";
import { timeAgo } from "../../Utils/TimeAgo";
import CommentsModal from "../Comment/CommentModal";

const FeedFooter = ({ post, isProfilePage, creatorProfile }) => {
    const { isLiked, likes, handleLikePost } = useLikePost(post);
    const { isCommenting, handlePostComment } = usePostComment();
    const [comment, setComment] = useState('');
    const authUser = useAuthStore(state => state.user);
    const commentRef = useRef(null)

    const handleSubmitComment = async () => {
        await handlePostComment(post.id, comment);
        setComment('')
    }

    // for viewing all the comment in feed
    const {isOpen,onOpen,onClose}=useDisclosure();

    return (
        <Box mb={10} marginTop={"auto"}>
            <Flex alignItems={"center"} gap={4} width={"full"} pt={0} mb={2} mt={4}>
                <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
                    {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
                </Box>
                <Box fontSize={18} cursor={"pointer"} onClick={() => commentRef.current.focus()}>
                    <CommentLogo />
                </Box>
            </Flex>
            <Text fontSize={"sm"} fontWeight={600}>
                {likes} likes
            </Text>
            {isProfilePage && (<>
                <Text fontSize={"12"} color={"gray"}>
                    Posted {timeAgo(post.createdAt)}
                </Text>
            </>)}
            {!isProfilePage && (
                <>
                    <Flex gap={2} fontWeight={700} fontSize='sm' my={2}>
                        {creatorProfile?.userName}
                        <Text fontWeight={400}>{post.caption}</Text>
                    </Flex>
                    {post.comments.length > 0 && (
                        <Text fontSize={"sm"} color={"gray"} cursor={"pointer"} onClick={onOpen}>
                            View all {post.comments.length} comment
                        </Text>
                        
                    )}
                    {isOpen ? <CommentsModal isOpen={isOpen} onClose={onClose} post={post}/>:null}
                </>

            )}

            {authUser && <Flex justifyContent={"space-between"} alignItems={"center"} gap={4} w={"full"}>
                <InputGroup size='sm'>
                    <Input variant='flushed' placeholder='Add a comment.....' fontSize={14} onChange={(e) => setComment(e.target.value)} value={comment} ref={commentRef} />
                    <InputRightElement>
                        <Button bg={"transparent"} color={"blue.500"} cursor={"pointer"} fontSize={14} fontWeight={600} _hover={{ color: "white" }} onClick={handleSubmitComment} isLoading={isCommenting} >Post</Button>
                    </InputRightElement>
                </InputGroup>
            </Flex>}
        </Box>
    )
}

export default FeedFooter