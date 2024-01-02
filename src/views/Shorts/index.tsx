import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  StackDivider,
  Tag,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";

export const ShortsContents = () => {
  const slugId = "ini-contoh-blog-deskripsi-slug";

  return (
    <Flex marginTop="4rem" direction="column">
      <Box>
        <Heading as="h1" size={{ base: "3xl", md: "2xl", sm: "2xl" }}>
          Shorts
        </Heading>
        <Text>
          Short article thats not long enough to be a blog post, usually comes
          from my personal notes.
        </Text>
      </Box>

      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <IoSearchOutline color="gray.300" />
        </InputLeftElement>
        <Input type="tel" placeholder="Search ..." />
      </InputGroup>

      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
        <Card margin="2rem 0">
          <CardHeader>
            <Heading size="md">Absolute Import</Heading>
          </CardHeader>
          <CardBody paddingY="4px">
            <HStack spacing={2}>
              <Tag size="sm" variant="solid" colorScheme="teal">
                react
              </Tag>
              <Tag size="sm" variant="solid" colorScheme="teal">
                nextjs
              </Tag>
            </HStack>
          </CardBody>
          <CardFooter>
            <Flex gap="1rem">
              <Flex gap="0.3rem" alignItems="center">
                <FaEye /> 1000 views
              </Flex>
              <Flex gap="0.3rem" alignItems="center">
                <BiSolidLike />
                800 likes
              </Flex>
            </Flex>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Flex>
  );
};
