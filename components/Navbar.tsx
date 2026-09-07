"use client";
import { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const links = ["About","Skills","Projects","Experience","Education","Contact"];

export default function Navbar() {
  const [visible, setVisible]   = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 40);     // show after 40px, hide again at top
      setScrolled(y > 80);    // add shadow/border after 80px
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navClass = [
    styles.nav,
    visible  ? styles.visible  : "",
    scrolled ? styles.scrolled : "",
  ].filter(Boolean).join(" ");

  return (
    <>
      <nav className={navClass}>
        <a href="#hero" className={styles.logo}>KSS<em>.</em></a>
        <ul className={styles.links}>
          {links.map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <a href="mailto:sskruththik@gmail.com" className={styles.cta} id="nav-cta-btn">Say Hello</a>
        <button
          className={styles.ham}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={open ? styles.s1open : ""} />
          <span className={open ? styles.s2open : ""} />
          <span className={open ? styles.s3open : ""} />
        </button>
      </nav>
      <nav className={`${styles.mob} ${open ? styles.mobOpen : ""}`} aria-label="Mobile navigation">
        {links.map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}>{l}</a>
        ))}
      </nav>
    </>
  );
}