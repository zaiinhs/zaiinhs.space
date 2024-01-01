import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

export const AboutContent = () => {
  return (
    <>
      <Flex
        gap="2rem"
        marginY="4rem"
        width={{ md: "100%" }}
        direction={{ sm: "column", md: "row" }}>
        <Stack width={{ sm: "100%", md: "70%" }}>
          <Heading size="xs" textTransform="uppercase">
            About me
          </Heading>
          <Text textIndent="50px" textAlign="justify" pt="2" fontSize="sm">
            Hi! I am a fast learner and always try to be honest and tactful
            towards others. I am to grow in what I can do and I am always
            looking for something new to learn and improve. Sometimes writes
            articles on medium with some discussion topics about javascript
            fundamental and frontend developer technologies.
          </Text>
        </Stack>

        <Stack width={{ sm: "100%", md: "30%" }}>
          <Image
            borderRadius="2rem"
            src="https://res.cloudinary.com/zaiinhs/image/upload/f_auto,q_auto/v1/personal-website/l4x5zibamsazq4eweo43"
            alt="My love"
          />
        </Stack>
      </Flex>
    </>
  );
};
