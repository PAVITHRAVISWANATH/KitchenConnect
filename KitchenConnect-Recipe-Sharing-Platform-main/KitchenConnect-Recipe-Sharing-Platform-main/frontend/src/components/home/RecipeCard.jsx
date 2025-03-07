import React from "react";
import { Box, Image, Text, Flex, Center } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <StarIcon mx={0.5} key={i} color={i <= rating ? "accent" : "gray.300"} />
    );
  }

  return <Flex>{stars}</Flex>;
};

export const RecipeCard = ({ img }) => {
  return (
    <Box
      borderWidth="1px"
      transition="0.2s ease-in"
      borderRadius="lg"
      overflow="hidden"
      shadow="md"
      _hover={{ transform: "scale(1.02)" }}
    >
      <Image
        w={"100%"}
        objectFit={"cover"}
        maxH={{ lg: "300px", md: "225px", base: "150px" }}
        src={img}
        // src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
        alt="Card Image"
      />
      <Box p={4}>
        <Text fontSize={{ lg: "lg", md: "md", base: "sm" }} mb={"1rem"}>
        For a flavorful paneer rice bowl, start by cooking 1 cup of rice according to package instructions. In a bowl, marinate paneer cubes with 2 tablespoons of sauce, 1 teaspoon of olive oil, salt, pepper, and a pinch of smoked paprika. Heat a pan and grill the paneer until golden brown. In another pan, sauté vegetables like bell peppers, onions, and corn with olive oil, salt, and pepper. To assemble, place rice in a bowl, top with grilled paneer and veggies.
        </Text>
        <Center my="2">
          <StarRating rating={Math.floor(Math.random() * (5 - 3 + 1)) + 3} />
        </Center>
      </Box>
    </Box>
  );
};
