"use client";
import { useEffect, useRef, useState } from "react";
import { useTypewriter } from "./useTypewriter";
import { IconLinkedIn, IconGitHub, IconEmail, IconPhone, IconGradCap, IconPin, IconBuilding, IconBrain } from "./Icons";
import styles from "./Hero.module.css";

const ROLES = ["Food Technology Undergraduate", "AI-Assisted Builder", "Student Community Leader"];

// Initialises to `target` for correct SSR, then counts up from 0 on first viewport entry
function AnimatedCounter({ target, decimals = 0, suffix = "" }: { target: number; decimals?: number; suffix?: string }) {
  const [display, setDisplay] = useState(target); // correct value on SSR / initial paint
  const ref = useRef<HTMLSpanElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (done.current) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      done.current = true;

      setDisplay(0);
      const start = performance.now();
      const dur = 1400;

      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 3); // cubic ease-out
        setDisplay(parseFloat((ease * target).toFixed(decimals)));
        if (t < 1) requestAnimationFrame(tick);
        else setDisplay(target);
      };

      // tiny delay so user sees it start from 0
      setTimeout(() => requestAnimationFrame(tick), 120);
    }, { threshold: 0.4 });

    io.observe(el);
    return () => io.disconnect();
  }, [target, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? display.toFixed(decimals) : Math.round(display)}{suffix}
    </span>
  );
}

const STATS = [
  { target: 20, decimals: 0, suffix: "+", label: "REST Endpoints" },
  { target: 3,  decimals: 0, suffix: "",  label: "Projects Built" },
  { target: 2023, decimals: 0, suffix: "",  label: "NIFTEM-K" },
];

export default function Hero() {
  const o1 = useRef<HTMLDivElement>(null);
  const o2 = useRef<HTMLDivElement>(null);
  const role = useTypewriter(ROLES);

  useEffect(() => {
    let raf: number;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        if (o1.current) o1.current.style.transform = `translate(${x * 35}px,${y * 35}px)`;
        if (o2.current) o2.current.style.transform = `translate(${-x * 22}px,${-y * 22}px)`;
      });
    };
    document.addEventListener("mousemove", onMove, { passive: true });
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div ref={o1} className="orb orb-1" aria-hidden />
      <div ref={o2} className="orb orb-2" aria-hidden />
      <div className="orb orb-3" aria-hidden />
      <div className={styles.gridBg} aria-hidden />

      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.eyebrow}>
              <span className={styles.dot} />
              Open to opportunities
            </div>

            <h1 className={styles.name}>
              Kruththik<br />
              <span className={styles.outline}>S&nbsp;S</span>
            </h1>

            <div className={styles.typeRow}>
              <span className={styles.typed}>{role}</span>
              <span className={styles.cursor} aria-hidden>|</span>
            </div>

            <p className={styles.sub}>
              B.Tech Food Technology &amp; Management at <strong>NIFTEM-K</strong> —
              building real software products with AI as my co-engineer.
            </p>

            <div className={styles.btns}>
              <a href="#projects" className="btn-primary" id="hero-view-work">
                View My Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="#contact" className="btn-ghost" id="hero-contact-btn">Get in Touch</a>
            </div>

            <div className={styles.socials}>
              {[
                { href: "https://linkedin.com/in/kruththikss", id: "hero-linkedin", label: "LinkedIn",  icon: <IconLinkedIn /> },
                { href: "https://github.com/krugren",           id: "hero-github",   label: "GitHub",    icon: <IconGitHub /> },
                { href: "mailto:sskruththik@gmail.com",         id: "hero-email",    label: "Email",     icon: <IconEmail /> },
                { href: "tel:+919363622977",                    id: "hero-phone",    label: "Phone",     icon: <IconPhone /> },
              ].map(({ href, id, label, icon }) => (
                <a key={id} href={href} id={id} title={label} aria-label={label}
                   target={href.startsWith("http") ? "_blank" : undefined}
                   rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles.avatar}>K</div>
            <div className={styles.divider} />
            <div className={styles.statRow}>
              {STATS.map(({ target, decimals, suffix, label }) => (
                <div key={label} className={styles.stat}>
                  <span className={styles.num}>
                    <AnimatedCounter target={target} decimals={decimals} suffix={suffix} />
                  </span>
                  <span className={styles.slb}>{label}</span>
                </div>
              ))}
            </div>
            <div className={styles.divider} />
            {[
              { icon: <IconBuilding size={14} />, text: "NIFTEM-K, Kundli" },
              { icon: <IconGradCap  size={14} />, text: "B.Tech FTM · 2023–Present" },
              { icon: <IconBrain    size={14} />, text: "AI-Assisted Builder" },
              { icon: <IconPin      size={14} />, text: "India" },
            ].map(({ icon, text }) => (
              <div key={text} className={styles.badge}><span className={styles.bico}>{icon}</span>{text}</div>
            ))}
          </div>
        </div>

        <div className={styles.dualPill}>
          <span className={styles.pillTeal}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 3h6M9 3v7l-5 9a1 1 0 0 0 .9 1.5h14.2a1 1 0 0 0 .9-1.5L15 10V3"/><path d="M9 17h6"/></svg>
            Food Science
          </span>
          <span className={styles.pillX}>×</span>
          <span className={styles.pillGold}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M7 10H2M7 14H2M17 10h5M17 14h5M10 7V2M14 7V2M10 22v-5M14 22v-5"/></svg>
            Tech Builder
          </span>
        </div>
      </div>
    </section>
  );
}