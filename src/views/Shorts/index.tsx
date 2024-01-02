import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
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
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <Heading size="md"> Customer dashboard</Heading>
          </CardHeader>
          <CardBody>
            <Text>
              View a summary of all your customers over the last month.
            </Text>
          </CardBody>
          <CardFooter></CardFooter>
        </Card>
      </SimpleGrid>
    </Flex>
  );
};
