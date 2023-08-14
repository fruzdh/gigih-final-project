import { useParams } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import useAsync from "../../../../hooks/useAsync";
import useRegisterLogin from "../../../../hooks/useRegisterLogin";
import axiosApiInstance from "../../../../utils/axios";
import Cookies from "js-cookie";

const CommentForm = ({ data, setData }) => {
  const { id } = useParams();
  const { user } = useAuth();
  const { onOpen, onRegister } = useRegisterLogin();
  const [comment, setComment] = useState("");
  const { isLoading, isError, run, error } = useAsync();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user?.username) {
      const payload = {
        comment: comment,
      };

      run(
        axiosApiInstance
          .post(`/video/${id}/comment`, payload, {
            headers: {
              Authorization: `bearer ${Cookies.get("token")}`,
            },
          })
          .then((res) => {
            setData([res.data, ...data]);
            setComment("");

            return res.data;
          })
      );
    } else {
      onRegister();
      onOpen();
    }
  };

  useEffect(() => {
    setComment("");
  }, [user]);

  return (
    <Box
      className="glass"
      p="10px"
      borderRadius="10px"
      boxShadow={`0 4px 4px -2px var(--chakra-colors-appBlue-light)`}
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
        onSubmit={handleSubmit}
      >
        <textarea
          placeholder="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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

        {isError && (
          <Text w="100%" textColor="white">
            error:{" "}
            {error?.response?.data ? error?.response?.data : error?.message}
          </Text>
        )}
        <Button
          type="submit"
          size="sm"
          w="100px"
          borderRadius="30px"
          isDisabled={comment.length === 0}
          isLoading={isLoading}
        >
          SUBMIT
        </Button>
      </form>
    </Box>
  );
};

export default CommentForm;
