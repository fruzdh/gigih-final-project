import { Box, Image } from "@chakra-ui/react";
import VideoDetail from "../../../../components/videoDetail";
import { useHistory } from "react-router-dom";

const VideoCard = ({ id, urlImageThumbnail, timestamp, viewCount }) => {
  const history = useHistory();

  return (
    <Box
      position="relative"
      backgroundColor="black"
      borderRadius="10px"
      h="180px"
      w="320px"
      maxW="calc(100vw - 20px)"
      m="auto"
      cursor="pointer"
      onClick={() => history.push(`/video/${id}`)}
    >
      <Image
        src={urlImageThumbnail}
        alt="thumbnail"
        h="100%"
        w="100%"
        objectFit="contain"
        borderRadius="10px"
      />
      <VideoDetail
        timestamp={timestamp}
        viewCount={viewCount}
        position="absolute"
        top="136px"
        borderBottomRadius="10px"
      />
    </Box>
  );
};

export default VideoCard;
