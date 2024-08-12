import { Box, Grid, Skeleton, VStack } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProfilePost from "./ProfilePost";


const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000)
  }, [])

  return (
    <>
      <Grid templateColumns={{ sm: "repeat(1,1fr)", md: ("repeat(3,1fr)") }} gap={1} columnGap={1}>
        {/* for initial loading */}
        {isLoading && [0, 1, 2, 3, 4, 5].map((_, idx) => (
          <VStack key={(idx)}>
            <Skeleton width={"full"}>
              <Box height="300px">Content wrapped</Box>
            </Skeleton>
          </VStack>))
        }

        {/* for showing profile posts */}
        {!isLoading && (
          <>
            <ProfilePost image="/img1.png" />
            <ProfilePost image="/img2.png" />
            <ProfilePost image="/img4.png" />
            <ProfilePost image="/img2.png" />
            <ProfilePost image="/img3.png" />
            <ProfilePost image="/img1.png" />
          </>
        )
        }
      </Grid>
    </>
  );
};

export default ProfilePosts;