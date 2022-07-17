import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.title_section}>
        <h1>Zainal Abidin</h1>
        <a href="#">subscribe</a>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  );
}
