import { Badge, Box, Image } from "@chakra-ui/react";

import Text from "../Text";
import { Product } from "../../domain/usecase";

const ProductDetail = ({
  imagesUrl,
  status,
  name,
  price,
  brand,
  sizes,
  installmentPrice,
}: Product) => (
  <Box display="flex" flexDirection="row">
    <Box display='flex' gap={8} flexDirection='row'>
      <Box display='flex' gap={8} flexDirection="column">
        {imagesUrl?.map((image, index) => (
          <Image borderRadius="lg" key={`image-detail-product-${index}`} width='74px' height='74px' src={image} alt="" />
        ))}
      </Box>
      <Image width='340px' borderRadius="lg"  height='400px'  src={imagesUrl[0]} alt="" />
    </Box>
    <Box pl="12" gap="4" display='flex' flexDirection="column">
      <Text
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
      >
        {name}
      </Text>
      {status && (
          <Badge
            borderRadius="full"
            px="2"
            colorScheme={status === "NEW" ? "cyan" : "purple"}
          >
            {status === "NEW" ? "Lançamento" : "Recomendado"}
          </Badge>
        )}
      <Text
        mt="1"
        fontWeight="semibold"
        as="h4"
        lineHeight="tight"
        noOfLines={1}
      >
        {brand}
      </Text>
      <Box>
        <Text>R${price}</Text>
        {!!installmentPrice && (
          <Text color="orange.500" fontSize="sm">
            {installmentPrice.installments} x R$ {installmentPrice.price}{" "}
          </Text>
        )}
      </Box>
      <Box gap={4} display="flex" flexDirection="row" flexWrap="wrap">
        {sizes.map((size)=> <Box borderRadius="lg" borderWidth={1} borderColor="grey.700" px='4' py='2' key={size}>{size}</Box>)}
      </Box>
    </Box>
  </Box>
);

export default ProductDetail;
