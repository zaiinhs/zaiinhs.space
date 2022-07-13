import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer_container}>
        <p>
          Copyright 2022 with ❤ by{" "}
          <a href="#">
            <b>@zaiinhs.</b>
          </a>
        </p>
      </div>
    </>
  );
}
