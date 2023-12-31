import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { SiReadthedocs, SiTwitter, SiGithub } from "react-icons/si";

export const HomeContent = () => {
  return (
    <Flex gap="2rem" direction="column" justifyContent="center" height="50vh">
      <Heading as="h1" size="3xl">
        Hi! <br />
        You can call me Zain
      </Heading>
      <Text width={{ base: "40vw" }}>
        Hi! I am a fast learner and always try to be honest and tactful towards
        others. I am to grow in what I can do and I am always looking for
        something new to learn and improve.
      </Text>
      <Flex gap="1rem">
        <Button>Read blog</Button>
        <Button>More about me</Button>
      </Flex>
      <Flex gap="1.5rem">
        <Flex alignItems="center">
          <SiReadthedocs /> Resume
        </Flex>
        <Flex alignItems="center">
          <SiTwitter /> @zaiinhs
        </Flex>
        <Flex alignItems="center">
          <SiGithub /> @zaiinhs
        </Flex>
      </Flex>
    </Flex>
  );
};
