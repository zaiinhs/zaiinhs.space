import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

export const BlogContents = () => {
  const slugId = "ini-contoh-blog-deskripsi-slug";

  return (
    <Flex marginTop="4rem" direction="column">
      <Box>
        <Heading as="h1" size={{ base: "3xl", md: "2xl", sm: "2xl" }}>
          Blog
        </Heading>
        <Text>
          Thoughts, mental models, and tutorials about front-end development.
        </Text>
      </Box>

      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <IoSearchOutline color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Search ..." />
      </InputGroup>

      <Flex
        gap="2rem"
        marginY="4rem"
        width={{ md: "100%" }}
        direction={{ sm: "column", md: "row" }}>
        <Stack width={{ sm: "100%", md: "70%" }}>
          <Card>
            <CardBody>
              <Stack divider={<StackDivider />} spacing="4">
                <Link href={`/blog/${slugId}`}>
                  <Heading size="xs" textTransform="uppercase">
                    Best Practices for Preventing Object Mutation in JavaScript
                  </Heading>
                  <Text pt="2" fontSize="sm">
                    Mutation adalah mengubah value dari property di dalam suatu
                    object. Object merupakan ...
                  </Text>
                </Link>
              </Stack>
            </CardBody>
          </Card>
        </Stack>

        <Stack width={{ sm: "100%", md: "30%" }}>
          <Box>Top Categories</Box>

          <Box>POPULAR CONTENT</Box>
        </Stack>
      </Flex>
    </Flex>
  );
};
