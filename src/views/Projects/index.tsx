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
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { TbBrandNextjs } from "react-icons/tb";
import { SiChakraui } from "react-icons/si";
import { FaLongArrowAltRight } from "react-icons/fa";

export const ProjectContents = () => {
  return (
    <>
      <Flex marginTop="4rem" direction="column">
        <Box>
          <Heading as="h1" size={{ base: "3xl", md: "2xl", sm: "2xl" }}>
            Projects
          </Heading>
          <Text>Showcase of my works on frontend development.</Text>
        </Box>

        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(300px, 1fr))">
          <Card margin="2rem 0">
            <CardHeader paddingBottom="5px">
              <Heading size="md">Personal Website</Heading>
              <Text fontSize="sm">
                It is built using nextjs technology, chakra ui, and love :v
              </Text>
            </CardHeader>
            <CardBody paddingY="0">
              <HStack>
                <TbBrandNextjs size="1.5rem" /> <SiChakraui size="1.5rem" />
              </HStack>

              <Image
                borderRadius="2rem"
                border="1px gray solid"
                marginTop="1rem"
                src="https://res.cloudinary.com/zaiinhs/image/upload/v1704237837/personal-website/buhdi6clqnbfx4aaczsv.png"
                alt="Website project"
              />
            </CardBody>
            <CardFooter paddingY="10px">
              <Button variant="link" rightIcon={<FaLongArrowAltRight />}>
                See more
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Flex>
    </>
  );
};
