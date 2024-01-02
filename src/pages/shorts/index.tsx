import { ContainerMaxWidth } from "@/components/Container";
import { HeadTitle } from "@/components/Head";
import { ShortsContents } from "@/views/Shorts";

const ShortsPage = () => {
  return (
    <>
      <HeadTitle
        title="Shorts"
        description="Hi! I am a fast learner and always try to be honest and tactful towards others. 
I am to grow in what I can do and I am always looking for something new to learn and improve. Sometimes writes articles on medium with some discussion topics about javascript fundamental and frontend developer technologies."
      />
      <ContainerMaxWidth>
        <ShortsContents />
      </ContainerMaxWidth>
    </>
  );
};

export default ShortsPage;
