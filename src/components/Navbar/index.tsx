import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { ModeDisplay } from "../Mode";

export const Navbar: any = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" marginTop="2rem">
      <Flex gap="0.8rem">
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

      <ModeDisplay />
    </Flex>
  );
};
