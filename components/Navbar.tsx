"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const links = ["About","Skills","Projects","Experience","Education","Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
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
          <span className={open ? styles.s1open : ""}></span>
          <span className={open ? styles.s2open : ""}></span>
          <span className={open ? styles.s3open : ""}></span>
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