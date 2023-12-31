import { ContainerMaxWidth } from "@/components/Container";
import { HeadTitle } from "@/components/Head";
import { Text } from "@chakra-ui/react";

const ProjectsPage = () => {
  return (
    <>
      <HeadTitle title="Projects" description="lorep ipsum dolor amit" />
      <ContainerMaxWidth>
        <Text>This is Projects Page</Text>
      </ContainerMaxWidth>
    </>
  );
};

export default ProjectsPage;
