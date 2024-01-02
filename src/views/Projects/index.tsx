import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

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
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
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
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
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
            <CardFooter>
              <Button>View here</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Flex>
    </>
  );
};
