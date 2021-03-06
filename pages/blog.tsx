import Layout from "../components/Layout";

interface PostProps {
  dataPost: any;
}

export default function Blog(props: PostProps) {
  const { dataPost } = props;

  // const authorPage = dataPost.feed;
  return (
    <Layout pageTitle="Blog">
      <h1>Blog</h1>
      {/* <a href={authorPage.link}>
        <img
          style={{ borderRadius: "50%" }}
          src={authorPage.image}
          alt="Zainal Abidin"
        />
        <span>{authorPage.title}</span>
      </a> */}
      <div>
        {dataPost.items.map((post) => (
          <>
            <a href={post.link} target="_blank" rel="noreferrer">
              <div
                key={post.id}
                style={{ margin: "10px", border: "1px solid #000" }}
              >
                <span>{post.pubDate}</span>
                <h3>{post.title}</h3>
                <div>
                  {post.categories.map((item, index) => (
                    <span
                      style={{
                        backgroundColor: "green",
                        margin: "10px",
                      }}
                      key={index}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </>
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const response = await fetch(process.env.NEXT_PUBLIC_MEDIUM_POST);
  const dataPost = await response.json();
  return {
    props: {
      dataPost,
    },
  };
}
