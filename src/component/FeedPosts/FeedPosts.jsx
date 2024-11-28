import { Box, Container, Flex, Skeleton, SkeletonCircle, Text, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost"
import useGetFeedPost from "../../Hooks/useGetFeedPost";



const FeedPosts = () => {
   const {isLoading,posts}=useGetFeedPost();
    return (
        <>
            <Container maxW={"container.sm"} py={10} px={2}>
                {isLoading && [0, 1, 2].map((_, idx) => (
                    <VStack key={idx} gap={2} alignItems={"flex-start"} mb={10}>
                        <Flex gap={2}>
                            <SkeletonCircle size='10' />
                            <VStack gap={2} alignItems={"center"}>
                                <Skeleton height='10px' w={"200px"} />
                                <Skeleton height='10px' w={"200px"} />
                            </VStack>
                        </Flex>
                        <Skeleton w={"full"}>
                            <Box h={"400px"}>contents wrapped</Box>

                        </Skeleton>
                    </VStack>
                ))}
                {!isLoading && posts.length>0 && 
                posts.map((post)=><FeedPost key={post.id} post={post}></FeedPost>)}
                {!isLoading && posts.length==0 && (<>
                    <Text fontSize={"xl"} color={"red"}>Looks Like you don&apos;t have any friends.</Text>
                    <Text fontSize={"xl"} color={"red"}>Let&apos;s make some now.</Text>
                </>) }

            </Container>

        </>
    )
}

export default FeedPosts