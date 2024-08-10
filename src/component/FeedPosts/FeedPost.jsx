import { Box, Image } from "@chakra-ui/react"
import FeedHeader from "./FeedHeader"
import FeedFooter from "./FeedFooter"


const FeedPost = ({username,img,avatar}) => {
  return (
    <>
        <FeedHeader username={username} avatar={avatar}/>
        <Box my={2}>
          <Image h={"screen"} src={img} borderRadius={4} overflow={"hidden"} alt={username}></Image>
        </Box>
        <FeedFooter username={username} />
    </>
  )
}

export default FeedPost