import { Box, Flex, Image, Text } from "@chakra-ui/react";

const ProductCard = ({ linkProduct, title, price, imageUrl }) => {
  return (
    <Flex
      align="center"
      gap="10px"
      className="glass"
      borderRadius="10px"
      w="300px"
      boxShadow="0 4px 4px -2px #51C9CD"
      cursor="pointer"
      mb="10px"
      onClick={() => {
        window.open(linkProduct, "_blank");
      }}
    >
      <Image
        alt="products"
        src={imageUrl}
        h="100px"
        w="100px"
        borderLeftRadius="10px"
      />
      <Box textColor="white">
        <Text fontWeight="bold" maxW="180" className="productTitle">
          {title}
        </Text>
        <Text fontSize="sm">
          {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(price)}
        </Text>
      </Box>
    </Flex>
  );
};

export default ProductCard;
