import { Flex, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <Stack alignItems="center">
      <Flex>Menu</Flex>

      <Stack>
        <Text>Reach me out</Text>
        <Flex justifyContent="center">
          <FaGithub />
          <FaLinkedin />
        </Flex>
      </Stack>

      <Text>&copy;Zainal Abidin {new Date().getFullYear()}</Text>
    </Stack>
  );
};
