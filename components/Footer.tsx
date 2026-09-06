import styles from "./Footer.module.css";
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Crafted with care &nbsp;&middot;&nbsp; <span className={styles.accent}>Kruththik S S</span> &nbsp;&middot;&nbsp; &copy; 2026</p>
    </footer>
  );
}