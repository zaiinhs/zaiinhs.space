import { ContainerMaxWidth } from "@/components/Container";
import { HeadTitle } from "@/components/Head";
import { BlogContents } from "@/views/Blog";

const BlogPage = () => {
  return (
    <>
      <HeadTitle
        title="Blog"
        description="Hi! I am a fast learner and always try to be honest and tactful towards others. 
I am to grow in what I can do and I am always looking for something new to learn and improve. Sometimes writes articles on medium with some discussion topics about javascript fundamental and frontend developer technologies."
      />
      <ContainerMaxWidth>
        <BlogContents />
      </ContainerMaxWidth>
    </>
  );
};

export default BlogPage;
