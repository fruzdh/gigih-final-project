import { Box, Button, Skeleton, Text } from "@chakra-ui/react";
import CommentCard from "../commentCard";
import { useParams } from "react-router-dom";
import useAsync from "../../../../hooks/useAsync";
import { useEffect } from "react";
import axiosApiInstance from "../../../../utils/axios";
import Error from "../../../../components/error";

const Comment = () => {
  const { id } = useParams();
  const { isLoading, isSuccess, isError, setData, data, error, run } = useAsync(
    {
      data: [],
    }
  );

  useEffect(() => {
    run(axiosApiInstance.get(`video/${id}/comment`).then((res) => res.data));
  }, [id, run]);

  return (
    <>
      <Box
        className="glass"
        p="10px"
        borderRadius="10px"
        boxShadow={`0 4px 4px -2px #51C9CD`}
        mb="10px"
      >
        <Text textColor="white" fontWeight="bold" fontSize="xl" mb="10px">
          Comment
        </Text>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            alignItems: "flex-end",
          }}
          onSubmit={() => {}}
        >
          <textarea
            placeholder="comment"
            className="textarea"
            style={{
              borderRadius: "10px",
              color: "white",
              resize: "vertical",
              backgroundColor: "unset",
              width: "100%",
              minHeight: "50px",
              border: "1px solid white",
              padding: "10px",
            }}
          />
          <Button size="sm" w="100px" borderRadius="30px">
            SUBMIT
          </Button>
        </form>
      </Box>

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
