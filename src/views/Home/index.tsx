import { Flex, Heading, Text, Button, Box } from "@chakra-ui/react";
import Link from "next/link";
import router from "next/router";
import { SiReadthedocs, SiLinkedin, SiGithub } from "react-icons/si";

export const HomeContent = () => {
  const { push } = router;
  return (
    <Flex
      direction="column"
      justifyContent="center"
      height="100vh"
      gap="2.2rem">
      <Heading as="h1" size={{ base: "3xl", md: "2xl", sm: "2xl" }}>
        Hi! <br />
        You can call me <span style={{ background: "orange" }}>Zain</span>
      </Heading>
      <Text width={{ lg: "40vw" }}>
        I am a fast learner and always try to be honest and tactful towards
        others. I am to grow in what I can do and I am always looking for
        something new to learn and improve.
      </Text>
      <Flex gap="1rem">
        <Box padding="0.5rem 1rem" borderRadius="2rem" border="1px gray solid">
          <Link href="/blog" target="_blank">
            Read blog
          </Link>
        </Box>

        <Box padding="0.5rem 1rem" borderRadius="2rem" border="1px gray solid">
          <Link href="/about">More about me</Link>
        </Box>
      </Flex>
      <Flex gap="1.5rem">
        <a href="#">
          <a
            href="https://drive.google.com/file/d/1IFugyGbDzxDbzBYyyRetj3ZiMc5R8skj/view?usp=sharing"
            target="_blank">
            <Flex alignItems="center">
              <SiReadthedocs /> Resume
            </Flex>
          </a>
        </a>
        <a href="https://www.linkedin.com/in/zaiinhs" target="_blank">
          <Flex alignItems="center">
            <SiLinkedin /> @zaiinhs
          </Flex>
        </a>
        <a href="https://github.com/zaiinhs" target="_blank">
          <Flex alignItems="center">
            <SiGithub /> @zaiinhs
          </Flex>
        </a>
      </Flex>
    </Flex>
  );
};
