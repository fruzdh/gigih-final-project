import { Skeleton, Text } from "@chakra-ui/react";
import ProductCard from "../productCard";
import { useParams } from "react-router-dom";
import useAsync from "../../../../hooks/useAsync";
import { useEffect } from "react";
import axiosApiInstance from "../../../../utils/axios";
import Error from "../../../../components/error";
import NoData from "../../../../components/noData";

const Product = () => {
  const { id } = useParams();
  const { isLoading, isSuccess, isError, data, error, run } = useAsync({
    data: [],
  });

  useEffect(() => {
    run(axiosApiInstance.get(`video/${id}/product`).then((res) => res.data));
  }, [id, run]);

  return (
    <>
      <Text textColor="white" fontWeight="bold" mb="10px" fontSize="xl">
        Products
      </Text>

      {isLoading &&
        Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} h="100px" w="300px" borderRadius="10px" mb="10px" />
        ))}

      {isSuccess &&
        data.length > 0 &&
        data.map(({ product_id, link_product, title, price, image_url }) => (
          <ProductCard
            key={product_id}
            linkProduct={link_product}
            title={title}
            price={price}
            imageUrl={image_url}
          />
        ))}

      {isSuccess && data.length === 0 && <NoData h="calc(100vh - 180px)" />}

      {isError && <Error error={error} h="calc(100vh - 180px)" />}
    </>
  );
};

export default Product;
