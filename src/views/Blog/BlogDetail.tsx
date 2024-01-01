import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { ARTICLE_BLOG } from "@/constants/data";

export const BlogDescriptionContent = () => {
  const { title, description } = ARTICLE_BLOG;

  return (
    <>
      <Flex
        gap="2rem"
        marginY="4rem"
        width={{ md: "100%" }}
        direction={{ sm: "column", md: "row" }}>
        <Stack width={{ sm: "100%", md: "70%" }}>
          <Heading size="xs" textTransform="uppercase">
            {title}
          </Heading>
          <Text textIndent="50px" textAlign="justify" pt="2" fontSize="sm">
            {description}
          </Text>
        </Stack>

        <Stack width={{ sm: "100%", md: "30%" }}>
          <Box>Top Categories</Box>

          <Box>POPULAR CONTENT</Box>
        </Stack>
      </Flex>
    </>
  );
};
