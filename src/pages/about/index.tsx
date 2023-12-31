import { ContainerMaxWidth } from "@/components/Container";
import { HeadTitle } from "@/components/Head";
import { Text } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <>
      <HeadTitle title="About" description="lorep ipsum dolor amit" />
      <ContainerMaxWidth>
        <Text>This is About Page</Text>
      </ContainerMaxWidth>
    </>
  );
};

export default AboutPage;
