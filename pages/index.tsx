import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout pageTitle="Homepage">
      <h1 style={{ textAlign: "center" }}>Halo 👋</h1>
      <p style={{ color: "grey" }}>
        Onprogress, disini akan ditampilkan repository github, referensi :
        https://docs.github.com/en/rest/repos/repos#get-a-repository
      </p>
    </Layout>
  );
}
