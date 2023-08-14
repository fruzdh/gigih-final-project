import { Skeleton } from "@chakra-ui/react";
import CommentCard from "../commentCard";
import { useParams } from "react-router-dom";
import useAsync from "../../../../hooks/useAsync";
import axiosApiInstance from "../../../../utils/axios";
import Error from "../../../../components/error";
import CommentForm from "../commentForm";
import { useEffect } from "react";

const Comment = () => {
  const { id } = useParams();

  const { isLoading, isSuccess, isError, setData, data, error, run } = useAsync(
    {
      data: [],
    }
  );

  useEffect(() => {
    run(axiosApiInstance.get(`video/${id}/comment`).then((res) => res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CommentForm data={data} setData={setData} />

      {isLoading &&
        Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} h="70px" w="100%" borderRadius="10px" mb="10px" />
        ))}

      {isSuccess &&
        data.map(({ username, profile_color, comment, timestamp }) => (
          <CommentCard
            key={`${username}${timestamp}`}
            username={username}
            profileColor={profile_color}
            commnet={comment}
            timestamp={timestamp}
          />
        ))}

      {isError && <Error error={error} h="500px" />}
    </>
  );
};

export default Comment;
