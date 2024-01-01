import { Flex, Stack, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <Stack alignItems="center" borderTop="1px gray solid">
      <Flex marginTop="1rem" gap="4rem">
        <Link href="#">
          <Text fontWeight="bold">Source Code</Text>
        </Link>
        <Link href="#">
          <Text fontWeight="bold">Design</Text>
        </Link>
        <Link href="#">
          <Text fontWeight="bold">Docs</Text>
        </Link>
        <Link href="#">
          <Text fontWeight="bold">Resources</Text>
        </Link>
      </Flex>

      <Stack marginBottom="2rem" marginTop="3rem">
        <Text color="gray" fontWeight="bold">
          Reach me out
        </Text>
        <Flex gap="1rem" fontSize="2rem" justifyContent="center">
          <a href="#">
            <FaGithub color="gray" />
          </a>
          <a href="#">
            <FaLinkedin color="gray" />
          </a>
        </Flex>
      </Stack>

      <Text color="gray">&copy;Zainal Abidin {new Date().getFullYear()}</Text>
    </Stack>
  );
};
