"use client";
import { useEffect, useRef } from "react";
import { IconFlask, IconChip, IconUsers } from "./Icons";
import styles from "./Skills.module.css";

const CATEGORIES = [
  {
    icon: <IconFlask size={20} />, title: "Food Technology", sub: "Domain & Industry", variant: "teal",
    chips: ["QA / QC","Sensory Evaluation","New Product Development","Food Safety","HACCP","ISO 22000:2018","FSSC 22000 V6.0"],
  },
  {
    icon: <IconChip size={20} />, title: "AI & Development", sub: "Software & AI Tools", variant: "gold",
    chips: ["Claude · Opus & Sonnet","ChatGPT","Google Antigravity","Next.js","Prisma","REST APIs","PostgreSQL / SQLite","AI-Assisted Development","Requirements & Architecture"],
  },
  {
    icon: <IconUsers size={20} />, title: "Community & Productivity", sub: "Leadership & Tools", variant: "teal",
    chips: ["Event Coordination","Team Management","Planning & Budgeting","Communication","Excel · PowerPoint","Canva","Documentation"],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const els = el.querySelectorAll<HTMLElement>(".fade-up");
    const io = new IntersectionObserver(
      (e) => e.forEach(en => { if (en.isIntersecting) { (en.target as HTMLElement).classList.add("visible"); io.unobserve(en.target); } }),
      { threshold: 0.08 }
    );
    els.forEach(i => io.observe(i));
    return () => io.disconnect();
  }, []);

  return (
    <section id="skills" className={`${styles.section} pad`}>
      <div className="wrap">
        <span className="section-label">Skills</span>
        <h2 className="section-title">Skills &amp; Tools</h2>
        <p className="section-desc">A dual skill-set spanning food science and modern technology — built through academic training, industry stints, and real project delivery.</p>
        <div ref={ref} className={styles.grid}>
          {CATEGORIES.map(({ icon, title, sub, variant, chips }) => (
            <div key={title} className={`${styles.box} fade-up`}>
              <div className={styles.head}>
                <div className={`${styles.ico} ${styles[`ico_${variant}`]}`}>{icon}</div>
                <div><h3 className={styles.title}>{title}</h3><div className={styles.sub}>{sub}</div></div>
              </div>
              <div className={styles.chips}>
                {chips.map(c => <span key={c} className={`chip chip-${variant === "teal" ? "teal" : "gold"}`}>{c}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}