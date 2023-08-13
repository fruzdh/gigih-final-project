import { AspectRatio, Grid, GridItem, Skeleton } from "@chakra-ui/react";
import VideoDetail from "../../components/videoDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Product from "./components/product";
import Comment from "./components/comment";
import useAsync from "../../hooks/useAsync";
import axiosApiInstance from "../../utils/axios";
import Error from "../../components/error";

const Detail = () => {
  const { id } = useParams();
  const { isLoading, isSuccess, isError, data, error, run } = useAsync({
    data: [],
  });

  useEffect(() => {
    run(axiosApiInstance.get(`video/${id}`).then((res) => res.data));
  }, [id, run]);

  return (
    <Grid templateColumns="auto 300px" gap="10px" mt="20px">
      <GridItem rowSpan={1} colSpan={1}>
        {isLoading && (
          <>
            <AspectRatio maxW="100%" ratio={16 / 9}>
              <Skeleton />
            </AspectRatio>
            <Skeleton borderRadius="10px" h="50px" w="100%" my="10px" />
          </>
        )}

        {isSuccess && (
          <>
            <AspectRatio maxW="100%" ratio={16 / 9}>
              <iframe title="youtube" src={data.url_embed} />
            </AspectRatio>

            <VideoDetail
              color="#51C9CD"
              timestamp={data.timestamp}
              viewCount={data.view_count}
              borderRadius="10px"
              my="10px"
            />
          </>
        )}

        {isError && <Error error={error} h="500px" />}
        <Comment />
      </GridItem>
      <GridItem rowSpan={1} colSpan={1}>
        <Product />
      </GridItem>
    </Grid>
  );
};

export default Detail;
