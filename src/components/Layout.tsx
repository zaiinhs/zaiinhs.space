import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
  pageTitle: string;
}

const Layout = (props: LayoutProps) => {
  const { children, pageTitle } = props;

  return (
    <>
      <Head>
        <title>Zainal Abidin | {pageTitle}</title>
        <meta
          name="description"
          content="Halo saya Zainal Abidin, asal desa Curah Dringu, Tongas, Probolinggo. Saat ini saya fokus pada Front-End Development."
        />
      </Head>

      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
