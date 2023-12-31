import { ContainerMaxWidth } from "@/components/Container";
import { HeadTitle } from "@/components/Head";
import { Text } from "@chakra-ui/react";

const ShortsPage = () => {
  return (
    <>
      <HeadTitle title="Shorts" description="lorep ipsum dolor amit" />
      <ContainerMaxWidth>
        <Text>This is Shorts Page</Text>
      </ContainerMaxWidth>
    </>
  );
};

export default ShortsPage;
