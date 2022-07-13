import Layout from "components/Layout";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout pageTitle="Homepage">
      <h1 style={{ textAlign: "center" }}>Halo 👋</h1>
    </Layout>
  );
};

export default Home;
