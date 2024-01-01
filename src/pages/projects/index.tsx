import { ContainerMaxWidth } from "@/components/Container";
import { HeadTitle } from "@/components/Head";
import { Text } from "@chakra-ui/react";

const ProjectsPage = () => {
  return (
    <>
      <HeadTitle
        title="Projects"
        description="Hi! I am a fast learner and always try to be honest and tactful towards others. 
I am to grow in what I can do and I am always looking for something new to learn and improve. Sometimes writes articles on medium with some discussion topics about javascript fundamental and frontend developer technologies."
      />
      <ContainerMaxWidth>
        <Text>This is Projects Page</Text>
      </ContainerMaxWidth>
    </>
  );
};

export default ProjectsPage;
