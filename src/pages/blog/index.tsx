import { ContainerMaxWidth } from "@/components/Container";
import { HeadTitle } from "@/components/Head";
import { Text } from "@chakra-ui/react";

const BlogPage = () => {
  return (
    <>
      <HeadTitle title="Blog" description="lorep ipsum dolor amit" />
      <ContainerMaxWidth>
        <Text>This is Blog Page</Text>
      </ContainerMaxWidth>
    </>
  );
};

export default BlogPage;
