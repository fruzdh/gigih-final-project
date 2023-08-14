import { Flex, Skeleton, Text } from "@chakra-ui/react";
import ProductCard from "../productCard";
import { useParams } from "react-router-dom";
import useAsync from "../../../../hooks/useAsync";
import { useEffect, useMemo } from "react";
import axiosApiInstance from "../../../../utils/axios";
import Error from "../../../../components/error";
import NoData from "../../../../components/noData";
import useDevice from "../../../../hooks/useDevice";

const Product = () => {
  const { id } = useParams();
  const { isLoading, isSuccess, isError, data, error, run } = useAsync({
    data: [],
  });

  const { isTablet } = useDevice();

  useEffect(() => {
    run(axiosApiInstance.get(`video/${id}/product`).then((res) => res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderProduct = useMemo(() => {
    if (isSuccess && data.length > 0) {
      return data.map(
        ({ product_id, link_product, title, price, image_url }) => (
          <ProductCard
            key={product_id}
            linkProduct={link_product}
            title={title}
            price={price}
            imageUrl={image_url}
          />
        )
      );
    } else {
      return <></>;
    }
  }, [data, isSuccess]);

  return (
    <>
      <Text textColor="white" fontWeight="bold" mb="10px" fontSize="xl">
        Products
      </Text>

      {isLoading &&
        Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} h="100px" w="300px" borderRadius="10px" mb="10px" />
        ))}

      {isTablet ? (
        <Flex overflowX="scroll" gap="10px">
          {renderProduct}
        </Flex>
      ) : (
        renderProduct
      )}

      {isSuccess && data.length === 0 && (
        <NoData h={isTablet ? "100px" : "calc(100vh - 180px)"} />
      )}

      {isError && <Error error={error} h="calc(100vh - 180px)" />}
    </>
  );
};

export default Product;
