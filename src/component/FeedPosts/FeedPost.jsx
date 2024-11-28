import { Box, Image } from "@chakra-ui/react"
import useGetUserProfileById from "../../Hooks/useGetUserProfileById"
import FeedHeader from "./FeedHeader"
import FeedFooter from "./FeedFooter"


const FeedPost = ({post}) => {
  const { userProfile } = useGetUserProfileById(post.createBy);

    // Don't render FeedHeader until creatorProfile is valid
    if ( !userProfile) {
        return null; 
    }
  return (
    <>
        <FeedHeader post={post} creatorProfile={userProfile}/>
        <Box my={2}>
          <Image h={"screen"} src={post.imageURL} borderRadius={4} overflow={"hidden"} alt={"Error Loading"}></Image>
        </Box>
        <FeedFooter post={post}  creatorProfile={userProfile} />
    </>
  )
}

export default FeedPost