import { Box, Flex, Grid, Skeleton, Text, VStack } from "@chakra-ui/react"
import useGetUserPost from "../../Hooks/useGetUserPost";
import ProfilePost from "./ProfilePost" 

const ProfilePosts = () => {
  const {isLoading,posts}=useGetUserPost();
  const noPostsFound=!isLoading && posts.length === 0;
  if(noPostsFound) return <NoPostsFound/>

  return (
    <>
      <Grid templateColumns={{ sm: "repeat(1,1fr)", md: ("repeat(3,1fr)") }} gap={1} columnGap={1}>
        {/* for initial loading */}
        {isLoading && [0, 1, 2].map((_, idx) => (
          <VStack key={(idx)}>
            <Skeleton width={"full"}>
              <Box height="300px">Content wrapped</Box>
            </Skeleton>
          </VStack>))
        }

        {/* for showing profile posts */}
        {!isLoading && (
          <>
            {posts.map((post)=>(
              <ProfilePost post={post} key={post.id}/>
            ))}
          </>
        )
        }
      </Grid>
    </>
  );
};

export default ProfilePosts;


const NoPostsFound=()=>{
  return (
    <Flex flexDir='column' textAlign="center" mx={"auto"} mt={10}>
      <Text fontSize={"2xl"}> No posts Found 😲</Text>
    </Flex>
  )
}