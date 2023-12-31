import { Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";

export const Navbar: any = () => {
  return (
    <>
      <Flex justifyContent="space-between" marginTop="2rem" paddingX="1.5rem">
        <Flex gap="1rem">
          <Link href="/" color="blue.400">
            Home
          </Link>
          <Link href="/blog" color="blue.400">
            Blog
          </Link>
          <Link href="/projects" color="blue.400">
            Projects
          </Link>
          <Link href="/shorts" color="blue.400">
            Shorts
          </Link>
          <Link href="/about" color="blue.400">
            About
          </Link>
        </Flex>

        <Stack>
          <Text>mode</Text>
        </Stack>
      </Flex>
    </>
  );
};
