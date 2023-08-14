import { Box, Skeleton } from "@chakra-ui/react";
import VideoCard from "./components/videoCard";
import useAsync from "../../hooks/useAsync";
import { useEffect } from "react";
import axiosApiInstance from "../../utils/axios";
import Error from "../../components/error";
import NoData from "../../components/noData";
import useQuery from "../../hooks/useQuery";

const Home = () => {
  const query = useQuery();
  const { isLoading, isSuccess, isError, data, error, run } = useAsync({
    data: [],
  });

  useEffect(() => {
    const title = query.get("product_title");
    let payload = "video";
    if (title) {
      payload += `?product_title=${title}`;
    }

    run(axiosApiInstance.get(payload).then((res) => res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <>
      <Box
        display="grid"
        justifyContent="space-between"
        mt="20px"
        flexWrap="wrap"
        gridColumnGap="10px"
        gridRowGap="20px"
        gridTemplateColumns="repeat(auto-fill, 320px)"
      >
        {isLoading &&
          Array.from({ length: 20 }).map((_, i) => (
            <Skeleton key={i} h="180px" w="320px" borderRadius="10px" />
          ))}

        {isSuccess &&
          data.length > 0 &&
          data.map(
            ({ video_id, url_image_thumbnail, timestamp, view_count }) => (
              <VideoCard
                key={video_id}
                id={video_id}
                urlImageThumbnail={url_image_thumbnail}
                timestamp={timestamp}
                viewCount={view_count}
              />
            )
          )}
      </Box>

      {isSuccess && data.length === 0 && <NoData h="calc(100vh - 120px)" />}

      {isError && <Error error={error} h="calc(100vh - 120px)" />}
    </>
  );
};

export default Home;
